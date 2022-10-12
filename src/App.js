import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
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
