import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import RecipePage from './Pages/RecipePage/RecipePage';
import SearchPage from './Pages/SearchPage/SearchPage';

const queryClient = new QueryClient();
function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient} >
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path="/recipe/:drinkId" element={<RecipePage />}/>
          </Routes>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
