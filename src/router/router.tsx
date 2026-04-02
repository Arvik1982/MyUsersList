// import { MainLayout } from '@/components/layouts/MainLayout';
// import Dashboard from '@/pages/Dashboard/Dashboard';
// import Login from '@/pages/Login/Login';
// import EditUser from '@/pages/Users/EditUser';
// import { createBrowserRouter, Navigate } from 'react-router-dom';
// import { ProtectedRoute } from './guards/ProtectedRoute';
// import { PublicRoute } from './guards/PublicRoute';

// export const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: (
//       <PublicRoute>
//         <Login />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: '/',
//     element: (
//       <ProtectedRoute>
//         <MainLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//       {
//         path: '/users/:id/edit',
//         element: <EditUser />,
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <Navigate to="/" replace />,
//   },
// ]);
import { MainLayout } from '@/components/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard/Dashboard';
import EditUser from '@/pages/Users/EditUser';
import { createHashRouter, Navigate } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/users/:id/edit',
        element: <EditUser />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
