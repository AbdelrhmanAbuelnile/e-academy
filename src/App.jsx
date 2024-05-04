import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import VideosPage from "./pages/VideosPage";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Layout from "./pages/Layout";

const App = () => {
  

  return (
    <Router>
		<Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosPage />} />
      </Route>
        <Route path="/video/:id" element={<Video />} />
    </Routes>
    </Router>
  );
};

export default App;
