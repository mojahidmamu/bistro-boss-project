const NavBar = () => {

    const NavOptions = <>
     <li>
              <a>Service</a>
            </li>
            <li>
              <details>
                <summary>WorkArea</summary>
                <ul className="p-2">
                  <li className="text-black">
                    <a>Submenu </a>
                  </li>
                  <li className="text-black">
                    <a>Submenu </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Details</a>
            </li>
    </>

  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               {NavOptions} 
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Stated</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
