import React from "react";
import { Helmet } from "react-helmet-async";

const DESSERTS = () => {
  return (
    <section>
      <Helmet>
      <title>Bistro | Order Food | DESSERTS</title>
      </Helmet>
      <img
        class="mask mask-pentagon"
        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
      />
      <img
        class="mask mask-pentagon"
        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
      />

      <div className="join">
        <button className="join-item btn btn-xs">1</button>
        <button className="join-item btn btn-xs btn-active">2</button>
        <button className="join-item btn btn-xs">3</button>
        <button className="join-item btn btn-xs">4</button>
      </div>
      <div className="join">
        <button className="join-item btn btn-sm">1</button>
        <button className="join-item btn btn-sm btn-active">2</button>
        <button className="join-item btn btn-sm">3</button>
        <button className="join-item btn btn-sm">4</button>
      </div>
      <div className="join">
        <button className="join-item btn btn-md">1</button>
        <button className="join-item btn btn-md btn-active">2</button>
        <button className="join-item btn btn-md">3</button>
        <button className="join-item btn btn-md">4</button>
      </div>
      <div className="join">
        <button className="join-item btn btn-lg">1</button>
        <button className="join-item btn btn-lg btn-active">2</button>
        <button className="join-item btn btn-lg">3</button>
        <button className="join-item btn btn-lg">4</button>
      </div>
      <div className="join">
        <button className="join-item btn btn-xl">1</button>
        <button className="join-item btn btn-xl btn-active">2</button>
        <button className="join-item btn btn-xl">3</button>
        <button className="join-item btn btn-xl">4</button>
      </div>
    </section>
  );
};

export default DESSERTS;
