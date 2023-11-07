import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex shadow-lg justify-around items-center h-[7vh] w-full  absolute top-0 left-0 ">
      <Link
        to={"/"}
        className="text-white text-[1.7rem] font-bold cursor-pointer animate-bounce "
      >
        Marketing Wire
      </Link>
      <Link
        to={"/cart"}
        className="text-white text-[1.7rem] font-bold cursor-pointer"
      >
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
