import { Link } from 'react-router-dom';
import logo from '/public/favicon/anticon.svg';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
	return (
		<div className="flex items-center justify-between border-t py-4">
			<div className="flex flex-col">
				<div className="flex items-center gap-2">
					<img src={logo} alt="TSNM" className="size-10" />
					<Link to="/" className="text-lg font-bold">
						TSNM
					</Link>
				</div>
				<div className="text-muted-foreground">&copy; NPT. All rights reserved</div>
			</div>
			<div className="flex items-center gap-2">
				<Link to="/">Privacy Policy</Link>
				<Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
				<Link to="/">Intellectual Property Policy</Link>
				<Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
				<Link to="/">Terms of Service</Link>
			</div>
		</div>
	);
};

export default Footer;
