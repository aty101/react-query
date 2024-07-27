import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page.jsx";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page.jsx";
import { HomePage } from "./components/Home.page.jsx";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;