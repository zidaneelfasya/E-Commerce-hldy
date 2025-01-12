import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/Cartsummary";

// Main Cart page component
const Cart: React.FC = () => {
  const initialCartItems = [
    { id: 1, name: "Tea Set", price: 19.99, quantity: 2, images: ["/fotoproduk/5.png", "/fotoproduk/2.png"] },
    { id: 2, name: "Green Tea", price: 5.99, quantity: 1, images: ["/fotoproduk/3.png", "/fotoproduk/4.png"] },
    { id: 3, name: "Black Tea", price: 7.99, quantity: 3, images: ["/fotoproduk/1.png", "/fotoproduk/7.png"] },
    // Add more items to test the scroll effect
    { id: 4, name: "Herbal Tea", price: 9.99, quantity: 1, images: ["/fotoproduk/3.png", "/fotoproduk/2.png"] },
    { id: 5, name: "Chamomile Tea", price: 8.99, quantity: 2, images: ["/fotoproduk/5.png", "/fotoproduk/7.png"] },
    { id: 6, name: "Oolong Tea", price: 12.99, quantity: 1, images: ["/fotoproduk/1.png", "/fotoproduk/4.png"] },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
      <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-grow py-12 px-8 max-w-screen-xl mx-auto mt-12 mb-12">
              <div className="flex flex-col-reverse md:flex-row gap-12">
                  {/* Cart Items Section (Flexible) */}
                  <div className="w-full md:w-2/3">
                      <h1 className="text-4xl font-semibold mb-8">
                          Your Shopping Cart
                      </h1>
                      <section>
                          <h2 className="text-3xl font-medium mb-8">
                              Items in your cart
                          </h2>
                          <div className="space-y-8">
                              {cartItems.map((item) => (
                                  <CartItem
                                      key={item.id}
                                      id={item.id}
                                      name={item.name}
                                      price={item.price}
                                      quantity={item.quantity}
                                      onQuantityChange={handleQuantityChange}
                                      images={item.images}
                                  />
                              ))}
                          </div>
                      </section>
                  </div>

                  
                
                      <CartSummary
                          total={calculateTotal()}
                          calculateTotal={calculateTotal}
                      />
                  
              </div>
          </main>

          <Footer />
      </div>
  );
};

export default Cart;
