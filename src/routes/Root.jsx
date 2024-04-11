import { useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

export function Root() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  function toggleNavbar() {
    setIsNavbarOpen((current) => !current);
  }

  return (
    <>
      <NavigationBar toggleNavbar={toggleNavbar} />
      <main
        id="main"
        className={`${isNavbarOpen && "md:ml-[340px]"} p-5 ml-12`}
      >
        <section className="container mx-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
}
