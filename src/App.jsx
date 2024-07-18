import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import PageNotFound from "./ui/PageNotFound";

import Properties from "./features/properties/Properties";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
