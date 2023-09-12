import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";
export default function Footer() {
  return (
    <section className="bg-gradient-to-b from-[#fee5d5] pt-16 p-7 text-sky-950 rounded-t-[100px] text-2xl font-engrav">
      <div className="flex justify-between px-7">
        <div className="flex flex-col items-center gap-10 ">
          <h2 className="text-3xl relative before:h-0.5 before:w-full before:bg-sky-950 before:absolute before:-bottom-1.5">
            Start Your Journey
          </h2>
          <button className="py-2 px-4 border border-sky-950 rounded-2xl">
            Contact Us
          </button>
        </div>
        <div>
          <p>2422 Lindbergh St</p>
          <p>Auburn, CA, 95602, US</p>
          <p>530.524.8472</p>
        </div>
        <div className="flex items-center justify-between gap-4 text-3xl">
          <div className="border rounded-full border-slate-900 p-4">
            <AiFillFacebook />
          </div>
          <div className="border rounded-full border-slate-900 p-4">
            <AiFillInstagram />
          </div>
          <div className="border rounded-full border-slate-900 p-4">
            <AiFillYoutube />
          </div>
          <div className="border rounded-full border-slate-900 p-4">
            <AiFillMail />
          </div>
        </div>
      </div>
      <div className="mb-10 mt-16">
        <h2 className="text-9xl font-brand text-center">
          Blue Canyon Aviation
        </h2>
      </div>
    </section>
  );
}
