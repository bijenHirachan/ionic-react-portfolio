import React from "react";

const Product = ({ product, addToCart, cartItems }) => {
    return (
        <div className="min-h-48 p-4 rounded shadow-sm col-span-12 sm:col-span-6 md:col-span-4 bg-white">
            <div className="flex flex-col gap-8 justify-center mt-4 items-center">
                <img
                    className="h-16 w-auto object-contain"
                    src={`http://localhost:8000/${product.image_url}.jpg`}
                    alt=""
                />
                <div className="flex  flex-col ">
                    <h2 className="text-sm font-semibold">{product.title}</h2>
                    <p className="text-xs">
                        {product.description.substring(0, 25)}...
                    </p>
                </div>

                <div className="flex w-full justify-between items-center">
                    <p className="text-gray-500 text-lg font-semibold">
                        $ {(product.price / 100).toFixed(2)}
                    </p>

                    <button
                        onClick={() => addToCart(product)}
                        className={`text-xs hover:bg-gray-50 transition-all delay-75 border px-2 py-1 text-gray-500 border-gray-400`}
                    >
                        {!cartItems.find((pro) => product.id === pro.id)
                            ? "Add To Cart"
                            : "Remove"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
