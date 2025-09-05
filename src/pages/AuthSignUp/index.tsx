import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { Link, useLocation } from 'react-router-dom';

const SignUp = () => {
	const location = useLocation();
	const fromSignIn = location.state?.from === 'signin';
	return (
		<div className="flex h-svh items-center justify-center bg-[url('/auth-bg.jpg')] bg-cover bg-fixed bg-center">
			<div className="flex w-1/3 flex-col gap-4">
				<Card
					className={cn('bg-transparent text-white backdrop-blur-3xl', {
						'animate-flip-book-in-left': fromSignIn,
						'animate-slide-down': !fromSignIn,
					})}
				>
					<CardHeader className="text-center">
						<CardTitle className="text-xl">Welcome</CardTitle>
						<CardDescription>Register with your Google account</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<div className="grid gap-6">
								<Button variant="transparent" className="w-full">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
											fill="currentColor"
										/>
									</svg>
									Register with Google
								</Button>
								<div className="flex items-center">
									<span className="border-muted-foreground flex-1 border-t" />
									<span className="text-muted-foreground px-2">Or continue with</span>
									<span className="border-muted-foreground flex-1 border-t" />
								</div>
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="m@example.com" required />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="password">Password</Label>
										<Input id="password" type="password" required />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="confirm-password">Confirm Password</Label>
										<Input id="confirm-password" type="password" required />
									</div>
									<Button className="w-full">Register</Button>
								</div>
								<div className="text-center text-sm">
									Already have an account?{' '}
									<Link to={ROUTES.SIGN_IN} state={{ from: 'signup' }} className="underline underline-offset-4">
										Sign in
									</Link>
								</div>
							</div>
						</form>
					</CardContent>

					<CardFooter>
						<div className="*:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
							By creating an account, you agree to our <a href="#">Terms of Service</a> and{' '}
							<a href="#">Privacy Policy</a>.
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default SignUp;
