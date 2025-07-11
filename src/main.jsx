import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Homepage from './routes/Homepage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Write from './routes/Write.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
// End React Router

//Clerk Auth
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />
      },
      {
        path: "/:slug",
        element: <SinglePostPage />
      },
      {
        path: "/:write",
        element: <Write />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/posts",
        element: <PostListPage />
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
