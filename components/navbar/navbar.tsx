import NavLink from "../navlink/navlink";

export default function Navbar() {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 lg:mt-8 w-max">
        <NavLink href="#about" label="About" />
        <NavLink href="#experience" label="Experience" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#certificates" label="Certificates" />
      </ul>
    </nav>
  );
}
