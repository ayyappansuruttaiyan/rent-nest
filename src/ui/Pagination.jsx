function Pagination() {
  return (
    <div>
      <div className=" flex gap-4 items-center">
        <span>Page 5 of 5</span> <span>Previous </span>
        <button className=" bg-white border border-slate-200 text-center rounded-full h-10 w-10">
          1
        </button>
        <button className=" bg-white border border-slate-200 text-center rounded-full h-10 w-10">
          2
        </button>
        <button className=" bg-white border border-slate-200 text-center rounded-full h-10 w-10">
          3
        </button>
        <button className=" bg-white border border-slate-200 text-center rounded-full h-10 w-10">
          4
        </button>
        <button className=" bg-white border border-slate-200 text-center rounded-full h-10 w-10">
          5
        </button>
        <span>Next </span>
      </div>
    </div>
  );
}

export default Pagination;
