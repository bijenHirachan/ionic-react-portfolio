import Product from "@/Components/ShopDemo/Product";
import { Head, Link, router } from "@inertiajs/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const ShopDemo = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);

    const cartRef = useRef();

    const addToCart = (product) => {
        if (!cartItems.find((pro) => product.id === pro.id)) {
            setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        } else {
            setCartItems((prev) => prev.filter((pro) => pro.id !== product.id));
        }
    };

    const removeQuantity = (product) => {
        if (product.quantity == 1) {
            setCartItems((prev) => prev.filter((pro) => pro.id !== product.id));
        } else {
            let items = [];

            cartItems.forEach((item) => {
                if (item.id === product.id && product.quantity > 1) {
                    items.push({ ...item, quantity: product.quantity - 1 });
                } else {
                    items.push(item);
                }
            });

            setCartItems(items);
        }
    };

    const addQuantity = (product) => {
        let items = [];

        cartItems.forEach((item) => {
            if (item.id === product.id) {
                items.push({ ...item, quantity: product.quantity + 1 });
            } else {
                items.push(item);
            }
        });

        setCartItems(items);
    };

    const showCart = () => {
        gsap.to(cartRef.current, { x: 0, duration: 1 });
    };

    const hideCart = () => {
        gsap.to(cartRef.current, { x: 1000, duration: 2 });
    };

    const totalAmount = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += item.quantity * (item.price / 100);
        });

        return total;
    };

    const [search, setSearch] = useState("");

    const getSearchProducts = (e) => {
        e.preventDefault();
        router.get(
            "/projects/shop-demo",
            {
                search,
            },
            {
                preserveState: true,
            }
        );
    };

    return (
        <div className="min-h-screen  bg-green-50 overflow-x-hidden relative">
            <div
                ref={cartRef}
                className="bg-green-200 shadow-3xl translate-x-[1000px] z-40 p-4 w-[356px] h-full fixed top-0 right-0"
            >
                <div className="flex justify-end">
                    <AiOutlineClose
                        className="text-xl text-gray-500 cursor-pointer transition-all delay-75 hover:text-gray-700"
                        onClick={hideCart}
                    />
                </div>

                <div className="mt-24 flex flex-col gap-2">
                    {cartItems.length > 0 ? (
                        cartItems?.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-12 items-center gap-2 border-b border-gray-700/40 p-2"
                            >
                                <div className="col-span-6 text-sm text-gray-700">
                                    {item.title}
                                </div>
                                <div className="col-span-4 flex gap-1">
                                    <button
                                        onClick={() => removeQuantity(item)}
                                        className="border hover:border-gray-700 hover:text-gray-700 transition-all delay-75 border-gray-500 h-6 w-6 flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <div className="h-6 w-6 flex items-center justify-center">
                                        {item.quantity}
                                    </div>
                                    <button
                                        onClick={() => addQuantity(item)}
                                        className="border hover:border-gray-700 hover:text-gray-700 transition-all delay-75 border-gray-500 h-6 w-6 flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="col-span-2 text-sm text-gray-700">
                                    $
                                    {(
                                        (item.price / 100) *
                                        item.quantity
                                    ).toFixed(2)}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-700 text-center my-8">
                            Your cart is empty!
                        </div>
                    )}
                    <div className="flex justify-end text-gray-700">
                        Total $ {totalAmount().toFixed(2)}
                    </div>
                    <div className="flex mt-24 hover:text-gray-700 hover:border-gray-700 cursor-pointer transition-all delay-75 justify-center border text-gray-500 py-1 rounded border-gray-500">
                        Proceed To Checkout
                    </div>
                </div>
            </div>

            <Head title="Shop" />
            {/* {JSON.stringify(cartItems)} */}
            <header className="px-16 py-8 bg-green-100 fixed w-full shadow-md z-20">
                <nav className="flex items-center justify-between">
                    <h1
                        onClick={() => {
                            router.get(
                                "/projects/shop-demo",
                                {},
                                { preserveState: true }
                            );
                        }}
                        className="cursor-pointer text-xl font-bold text-green-500 drop-shadow-md"
                    >
                        Shop
                    </h1>
                    <form onSubmit={getSearchProducts}>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="border-none outline-none h-8 focus:ring-0 rounded"
                        />
                    </form>

                    <div className="relative">
                        <AiOutlineShoppingCart
                            onClick={showCart}
                            className="text-green-500 hover:text-green-500 cursor-pointer transition-all delay-75 text-2xl relative z-30"
                        />

                        {cartItems.length > 0 && (
                            <span className="transition-all delay-75 absolute top-0 right-[-4px] z-10 text-xs bg-red-500 h-2 w-2 rounded-full"></span>
                        )}
                    </div>
                </nav>
            </header>

            <section
                onClick={hideCart}
                className="p-16 grid grid-cols-12 gap-6 mt-24"
            >
                {products?.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        cartItems={cartItems}
                    />
                ))}
            </section>
        </div>
    );
};

export default ShopDemo;
