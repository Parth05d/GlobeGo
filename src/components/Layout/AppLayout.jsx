import React from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-15">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
