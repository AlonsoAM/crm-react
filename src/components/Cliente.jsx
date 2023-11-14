export const Cliente = ({ cliente }) => {
  const { id, nombre, telefono, empresa, email } = cliente;
  return (
    <tr key={id} className="hover">
      <td>{nombre}</td>
      <td>{telefono}</td>
      <td></td>
    </tr>
  );
};
