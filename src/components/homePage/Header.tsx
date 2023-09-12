import Image from "next/image";
import auburnbig from "/public/auburnbig.jpeg";
import "./curve.css";
export default function Header() {
  return (
    <header className="h-fit bg-gradient-to-b from-sky-300 px-7 pb-7 text-sky-950 ">
      <nav className="flex p-7 justify-between text-xl font-engrav">
        <p>home</p>
        <p>about</p>
        <p>contact</p>
      </nav>

      <h1 className="my-5 text-9xl font-brand text-center">
        Blue Canyon Aviation
      </h1>
      <div className="relative h-[110vh] w-full overflow-hidden curve bg-black">
        <Image src={auburnbig} alt="sky" fill={true} />
      </div>
    </header>
  );
}
