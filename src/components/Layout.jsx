import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM - Clientes
          </h2>
          <nav className="mt-10">
            <Link
              to="/"
              className="text-white block text-2xl mt-2 hover:text-indigo-300"
            >
              Clientes
            </Link>
            <Link
              to="/clientes/nuevo"
              className="text-white block text-2xl mt-2 hover:text-indigo-300"
            >
              Nuevo cliente
            </Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    </>
  );
};
