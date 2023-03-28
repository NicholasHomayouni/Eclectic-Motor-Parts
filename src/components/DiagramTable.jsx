import React from "react";

const Table = () => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3 text-left">KEY</th>
          <th className="p-3 text-left">PART #</th>
          <th className="p-3 text-left">DESCRIPTION</th>
          <th className="p-3 text-left">APPLICATION</th>
          <th className="p-3 text-left">PRICE</th>
          <th className="p-3 text-left">QTY</th>
          <th className="p-3 text-left">STOCK</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border">
          <td className="p-3">1</td>
          <td className="p-3">ABC123</td>
          <td className="p-3">Lorem ipsum dolor sit amet</td>
          <td className="p-3">Application 1</td>
          <td className="p-3">$19.99</td>
          <td className="p-3">10</td>
          <td className="p-3">In Stock</td>
        </tr>
        <tr className="bg-gray-100 border">
          <td className="p-3">2</td>
          <td className="p-3">DEF456</td>
          <td className="p-3">Consectetur adipiscing elit</td>
          <td className="p-3">Application 2</td>
          <td className="p-3">$29.99</td>
          <td className="p-3">5</td>
          <td className="p-3">Out of Stock</td>
        </tr>
        <tr className="bg-white border">
          <td className="p-3">3</td>
          <td className="p-3">GHI789</td>
          <td className="p-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
          <td className="p-3">Application 3</td>
          <td className="p-3">$39.99</td>
          <td className="p-3">3</td>
          <td className="p-3">In Stock</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
