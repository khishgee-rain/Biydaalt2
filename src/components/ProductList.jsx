import { useEffect, useState } from "react";
import "../globals.css";


function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Бүтээгдэхүүний жагсаалт</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Зураг</th>
                            <th className="border border-gray-300 px-4 py-2">Нэр</th>
                            <th className="border border-gray-300 px-4 py-2">Үнэ ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <img src={product.image} alt={product.title} className="w-16 h-16 object-contain mx-auto" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">{product.price} $</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
