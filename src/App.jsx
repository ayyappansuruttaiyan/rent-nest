import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import PageNotFound from "./ui/PageNotFound";
import Login from "./features/authentication/Login";
import Properties from "./features/properties/Properties";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/properties" element={<Properties />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
