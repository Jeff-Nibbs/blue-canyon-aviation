import Image from "next/image";
import sky from "/public/sky.jpg";
import down from "/public/down.jpeg";
import auburn2 from "/public/auburn2.jpg";
export default function Services() {
  return (
    <section className=" my-32 text-sky-950">
      <h2 className=" font-brand text-8xl text-center my-20">Our Services</h2>
      <div className="flex justify-between items-center m-7 font-hankeng">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            className="w-full aspect-4/3"
            src={sky}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 my-4">
            <div className="font-bold text-xl mb-2">Flight Training</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            className="w-full aspect-4/3"
            src={down}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 my-4">
            <div className="font-bold text-xl mb-2">Intro Flights</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            className="w-full aspect-4/3"
            src={auburn2}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 my-4">
            <div className="font-bold text-xl mb-2">
              Accelerated Flight School
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
