import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp/SignUp'
import Main from '../layout/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import LogIn from '../pages/LogIn/LogIn'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
        
      },
    ],
  },
  { path: '/login', element: <LogIn /> },
  { path: '/signup', element: <SignUp /> },
])