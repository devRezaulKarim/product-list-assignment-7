/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function Product({
  product: { productId, product, quantity, color, description, price },
  handleDelete,
}) {
  return (
    <tr>
      <td>{productId}</td>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{color}</td>
      <td>{description}</td>
      <td>
        <button
          className="bg-transparent border-0"
          onClick={() => handleDelete(productId)}
        >
          <MdDelete color="red" className="fs-4" />
        </button>
      </td>
    </tr>
  );
}
