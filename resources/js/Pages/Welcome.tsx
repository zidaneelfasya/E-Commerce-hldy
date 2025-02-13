"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/ComboboxDemo";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AccordionDemo from "@/components/accordion";
import Header from "@/components/Header";

const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home", label: "Home" },
];

const sortOptions = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
];

const Welcome = () => {
    const [category, setCategory] = React.useState("");
    const [sort, setSort] = React.useState("");

    return (
        <div>
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <section className="bg-gray-100 text-center py-16">
                <div className="slider">
                    {/* Replace with slider/carousel implementation */}
                    <div className="w-full mb-8">
                        <img
                            src="https://via.placeholder.com/1200x400"
                            alt="Placeholder Banner"
                            className="w-full max-h-[400px] object-cover"
                        />
                    </div>
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Welcome To hldy
                </h1>
                <p className="text-lg mt-2">Discover the best products here</p>
            </section>

            {/*new ariival product*/}
            <section className="container mx-auto py-3">
                <h1 className="text-3xl font-bold text-center">New Arrival</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    <ProductCard
                        image="product-image.jpg"
                        name="Product Name"
                        price="$99.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product1.jpg"
                        name="Product 1"
                        price="$99.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product2.jpg"
                        name="Product 2"
                        price="$149.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product3.jpg"
                        name="Product 3"
                        price="$199.99"
                        onAddToCart={() => {}}
                    />
                </div>
            </section>
            <section
                className="w-full max-w-screen-xl mx-auto py-10 px-4 lg:px-20 mt-60
            bg-gradient-to-r from-purple-800 to-purple-600 text-white"
            >
                <h1 className="text-4xl font-bold text-center">
                    Frequently Asked Questions
                </h1>
                <div className="flex justify-center items-center">
                    <AccordionDemo className="w-full lg:w-3/4 mx-auto text-lg lg:text-xl" />
                </div>
                <div className="flex justify-center mt-6">
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                        "After all," he said, "everyone enjoys a good joke, so
                        it's only fair that they should pay for the privilege."
                    </blockquote>
                </div>
                <div className="flex justify-center mt-6">
                    <Button className="mt-6 w-full lg:w-1/2 mx-auto">
                        Shop Now
                    </Button>
                </div>
            </section>
            {/* Product Listings */}
            <section className="container mx-auto py-10 mt-60">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Best Products
                </h1>
                <div className="flex justify-between mt-6">
                    <ComboboxDemo
                        options={categories}
                        placeholder="Category"
                        value={category}
                        setValue={setCategory}
                        className="w-1/2 lg:w-1/3 border border-purple-500"
                    />
                    <ComboboxDemo
                        options={sortOptions}
                        placeholder="Sort by"
                        value={sort}
                        setValue={setSort}
                        className="w-1/2 lg:w-1/3 border border-purple-500"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {/* Example Product */}
                    <ProductCard
                        image="product-image.jpg"
                        name="Product Name"
                        price="$99.99"
                        onAddToCart={() => alert("Product added to cart!")}
                    />
                    <ProductCard
                        image="product1.jpg"
                        name="Product 1"
                        price="$99.99"
                        onAddToCart={() => alert("Product 1 added to cart!")}
                    />
                    <ProductCard
                        image="product2.jpg"
                        name="Product 2"
                        price="$149.99"
                        onAddToCart={() => alert("Product 2 added to cart!")}
                    />
                    <ProductCard
                        image="product3.jpg"
                        name="Product 3"
                        price="$199.99"
                        onAddToCart={() => alert("Product 3 added to cart!")}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-purple-800 text-white py-6">
                <div className="container mx-auto">
                    <div className="footer-top flex justify-between items-start space-x-8">
                        {/* Footer Brand */}
                        <div className="footer-brand flex flex-col items-start">
                            <a href="#" className="logo">
                                <img
                                    src="logo.png"
                                    alt="logo"
                                    className="w-1/2"
                                />
                            </a>
                            <p className="footer-text mt-4">
                                ZidunMerce is a platform that provides a variety
                                of products
                            </p>
                        </div>

                        {/* Company Links */}
                        <ul className="footer-list space-y-2">
                            <li>
                                <p className="footer-list-title font-bold">
                                    Company
                                </p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Pricing plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Contacts
                                </a>
                            </li>
                        </ul>

                        {/* Support Links */}
                        <ul className="footer-list space-y-2">
                            <li>
                                <p className="footer-list-title font-bold">
                                    Support
                                </p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Ask a question
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Terms & conditions
                                </a>
                            </li>
                        </ul>

                        {/* Neighborhoods Links */}
                        <ul className="footer-list space-y-2">
                            <li>
                                <p className="footer-list-title font-bold">
                                    Neighborhoods in New York
                                </p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Manhattan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Central New York City
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Upper East Side
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Queens
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Theater District
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Midtown
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    SoHo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Chelsea
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom text-center mt-8">
                        <p className="copyright text-sm">
                            &copy; 2024{" "}
                            <a href="#" className="footer-link">
                                Green Loop
                            </a>
                            . All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;
