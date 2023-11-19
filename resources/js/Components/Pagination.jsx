import { Link } from "@inertiajs/react";

const Pagination = ({ items }) => {
    return (
        <div className="flex gap-4 my-4 justify-around text-xs sm:text-xs text-neutral-500">
            {items.current_page === 1 ? (
                <button
                    className={`border border-neutral-500 px-3 py-1 cursor-not-allowed rounded`}
                >
                    First Page
                </button>
            ) : (
                <Link
                    href={items.first_page_url}
                    className={`border border-neutral-500 px-3 py-1 hover:text-neutral-700 hover:border-neutral-700 transition-all delay-75 rounded`}
                >
                    First Page
                </Link>
            )}
            {items.prev_page_url ? (
                <Link
                    href={items.prev_page_url}
                    className={`border border-neutral-500 px-3 py-1 hover:text-neutral-700 hover:border-neutral-700 transition-all delay-75 rounded`}
                >
                    Prev Page
                </Link>
            ) : (
                <button
                    className={`border border-neutral-500 px-3 py-1 cursor-not-allowed rounded`}
                >
                    Prev Page
                </button>
            )}
            {items.next_page_url ? (
                <Link
                    href={items.next_page_url}
                    className={`border border-neutral-500 px-3 py-1 hover:text-neutral-700 hover:border-neutral-700 transition-all delay-75 rounded`}
                >
                    Next Page
                </Link>
            ) : (
                <button
                    className={`border border-neutral-500 px-3 py-1 cursor-not-allowed rounded`}
                >
                    Next Page
                </button>
            )}

            {items.current_page === items.last_page ? (
                <button
                    className={`border border-neutral-500 px-3 py-1 cursor-not-allowed rounded`}
                >
                    Last Page
                </button>
            ) : (
                <Link
                    href={items.last_page_url}
                    className={`border border-neutral-500 px-3 py-1 hover:text-neutral-700 hover:border-neutral-700 transition-all delay-75 rounded`}
                >
                    Last Page
                </Link>
            )}
        </div>
    );
};

export default Pagination;
