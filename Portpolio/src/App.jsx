import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />     {/* exact home */}
        <Route path="*" element={<NotFound />} /> {/* catch-all */}
      </Routes>
    </BrowserRouter>
  )
}
