import { HiOutlineSun, HiOutlineRss } from "react-icons/hi";
import Button from "../../btn/Button";

export default function Navbar() {
  return (
    <nav className="px-10 py-5 flex justify-between items-center">
      {/* logo */}
      <div className="font-black flex space-x-2 items-center">
        <img src="img/rocket.png" alt="Logo" className="h-[20px]" />
        <p>AstroWind</p>
      </div>
      {/* item nav */}
      <div className="">
        <ul className="flex space-x-3">
          <li>Landing</li>
          <li>Pages</li>
          <li>Widgets</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex space-x-3">
        <div className="flex space-x-2 items-center text-xl">
          <HiOutlineSun />
          <HiOutlineRss />
        </div>
        <Button title="Download" />
      </div>
    </nav>
  );
}
