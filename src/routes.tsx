import MainLayout from '@/components/Layouts/MainLayout';
import CatchAllRoute from '@/pages/CatchAllRoute';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const SignIn = lazy(() => import('@/pages/AuthSignIn'));
const SignUp = lazy(() => import('@/pages/AuthSignUp'));
const Song = lazy(() => import('@/pages/Song'));
const Playlist = lazy(() => import('@/pages/Playlist'));

export const ROUTES = {
	HOME: '/',
	FORBIDDEN: '/403',
	NOT_FOUND: '/404',
	ALL_ROUTE: '*',

	// Auth
	SIGN_IN: '/sign-in',
	SIGN_UP: '/sign-up',
	FORGOT_PASSWORD: '/forgot-password',

	SONG: '/song/:id',
	PLAYLIST: '/playlist/:id',
} as const;

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: ROUTES.SONG,
				element: <Song />,
			},
			{
				path: ROUTES.PLAYLIST,
				element: <Playlist />,
			},
		],
	},
	// Auth
	{
		path: ROUTES.SIGN_IN,
		element: <SignIn />,
		errorElement: <Error />,
	},
	{
		path: ROUTES.SIGN_UP,
		element: <SignUp />,
		errorElement: <Error />,
	},
	{
		path: ROUTES.FORGOT_PASSWORD,
		element: 'forgot',
		errorElement: <Error />,
	},
	// Common
	{
		path: ROUTES.ALL_ROUTE,
		element: <CatchAllRoute />,
	},
]);
