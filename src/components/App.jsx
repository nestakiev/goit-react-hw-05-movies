import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";

const HomeView = lazy(() => import("../Views/HomeView"));
const Movies = lazy(() => import('../Views/MoviesView'));
const MovieDetailsView = lazy(() => import('../Views/MovieDetailsView'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<HomeView/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='movies/:movieId' element={<MovieDetailsView/>}> 
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </>);
};
