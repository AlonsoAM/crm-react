import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">CRM - React</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};
