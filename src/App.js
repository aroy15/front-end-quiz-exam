import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics'
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path:'/topics',
          element:<Topics></Topics>,
          loader:async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path:'quiz/:quizId',
          loader:async ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>,
          loader:async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
