import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: "Codigo Con Juan",
    },
  ];
  return clientes;
}

export const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length ? (
        <div className="overflow-x-auto mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <Cliente key={cliente.id} cliente={cliente} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No hay clientes aún</span>
        </div>
      )}
    </>
  );
};
