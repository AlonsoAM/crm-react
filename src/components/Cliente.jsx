export const Cliente = ({ cliente }) => {
  const { id, nombre, telefono, empresa, email } = cliente;
  return (
    <tr key={id}>
      <td className="space-y-2 text-center">
        {" "}
        <p className="text-2xl text-gray-800 ">{nombre}</p> <p>{empresa}</p>
      </td>
      <td className="text-center">
        <p className="text-gray-600 ">
          <span className="text-gray-800 font-bold uppercase">Email: </span>{" "}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold uppercase">Teléfono: </span>{" "}
          {telefono}
        </p>
      </td>
      <td className="flex gap-3 items-center justify-center">
        <button className="btn btn-sm btn-ghost font-bold text-blue-600 uppercase hover:text-blue-800">
          Editar
        </button>
        <button className="btn btn-sm btn-ghost font-bold text-red-600 uppercase hover:text-red-800">
          Eliminar
        </button>
      </td>
    </tr>
  );
};
