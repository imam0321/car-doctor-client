const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, service, price, phone, img, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-28 h-28">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td className="text-xl font-semibold">{service}</td>
      <td>{phone}</td>
      <td>{price}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-error">Confirmed</button>
        ) : (
          <button onClick={() => handleConfirm(_id)} className="btn btn-error">
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
