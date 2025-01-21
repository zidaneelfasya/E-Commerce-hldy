<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::with(['category', 'user'])->get();
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return Inertia::render('Items/Create', [
        //     'categories' => Category::all(),
        // ]);
        $categories = Category::all();
        return inertia('Admin/Item/Create', compact('categories'));

    }

    /**
     * Store a newly created resource in storage.
     */
    // app/Http/Controllers/ItemController.php

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'disc_price' => 'nullable',
            'description' => 'required|string',
            'stock' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'images.*' => 'required|file|image'

        ]);
        $discPrice = 0;
        if($request->disc_price){
            $discPrice = $request->disc_price;
        }
        
        $item = Item::create([
            'name' => $request->name,
            'price' => $request->price,
            'disc_price' => $discPrice,
            'description' => $request->description,
            'stock' => $request->stock,
            'condition' => $request->condition,
            'category_id' => $request->category_id,
            'user_id' => auth()->id(),
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('uploads/items', 'public');
                $item->images()->create([
                    'image_path' => $path,
                ]);
            }
        }

        return response()->json([
            'message' => 'Item berhasil disimpan.',
            'item' => $item,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        
        $item = Item::with(['category', 'user', 'images'])->findOrFail($id);
        return response()->json($item);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Item::find($id);
        return inertia('Item/Edit', compact('item'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'location' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'stock' => 'sometimes|required|integer',
            'category_id' => 'sometimes|required|exists:categories,id',
        ]);

        $item->update($validatedData);
        return response()->json(['message' => 'Item updated successfully!', 'data' => $item]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $item = Item::findOrFail($id);
            $item->delete();
            return response()->json([
                'success' => true,
                'message' => 'Item deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete item',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
