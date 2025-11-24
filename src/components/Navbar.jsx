import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
	return (
		<nav>
			<div className="">
				<img src="/images/logo.svg" alt="Logo" />
				<p className="font-bold">Bhupendra's Portfolio</p>

				<ul>
					{navLinks.map(({ id, name }) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			</div>
			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<img key={id} src={img} alt={`icon-${id}`} />
					))}
				</ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
			</div>
		</nav>
	);
};

export default Navbar;
