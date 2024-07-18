import Properties from "../features/properties/Properties";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <div className="flex items-center">
          <div className=" flex-initial w-64 bg-slate-500">
            <Sidebar />
          </div>
          <div className="flex-auto">
            <Properties />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
