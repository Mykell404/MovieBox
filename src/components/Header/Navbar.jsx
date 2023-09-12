import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <img src="assets/images/Logo.png" alt="Movie-Box" className="w-24" />

      <Search />
      <div className="flex items-center gap-4">
        <p className="text-sm">Sign In</p>
        <img
          src="assets/images/Menu.png"
          alt="Menu"
          className=" w-9 rounded-full bg-[#BE123C]"
        />
      </div>
    </nav>
  );
}

export default Navbar;
