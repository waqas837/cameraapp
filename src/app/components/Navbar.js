import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div>
        <a href="#">
          <Image src={"/logo.png"} width={200} height={200} />
        </a>
      </div>
      <a href="/blogs" className="text-4xl text-indigo-700 font-bold">
        Blogs
      </a>
    </div>
  );
};

export default Navbar;
