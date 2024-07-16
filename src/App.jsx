import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
// import ReelsPage from "./pages/ReelsPage";
// import ProfilePage from "./pages/ProfilePage";
// import MessagesPage from "./pages/MessagesPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/" element={<MainLayout />}>
          
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/messages" element={<MessagesPage />} /> */}
      </Route>
    )
  )
  
  return <RouterProvider router={router} />;
}

export default App