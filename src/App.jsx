import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import ShowcaseLayout from "./layouts/ShowcaseLayout"
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ShowcaseLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>
    )
  )
  
  return <RouterProvider router={router} />;
}

export default App
