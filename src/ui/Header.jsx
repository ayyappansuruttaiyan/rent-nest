function Header() {
  return (
    <div className=" flex justify-between bg-blue-700 p-4 grid-rows-1	 items-center">
      <h1 className=" text-3xl uppercase text-slate-200">RentNest</h1>
      <div>
        <input type="search" placeholder="enter locality" />
      </div>
      <div>Login</div>
    </div>
  );
}

export default Header;
