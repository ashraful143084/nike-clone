import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center xl:flex-row gap-2 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl">Our Summer Collection</p>
        <h2 className="pt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="text-slate-gray mt-6 mb-14 text-lg leading-8 sm:max-w-sm">
          Discover Stylish nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full max-sm:gap-10 gap-16 mt-20">
          {statistics.map((item) => (
            <div>
              <p className="text-4xl font-bold font-palanquin">{item.value}</p>
              <p className="leading-7 text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center">
        <img
          src={bigShoe1}
          width={610}
          height={500}
          alt="big-shoe"
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((item) => (
            <div key={item.bigShoe}>
              <ShoeCard
                imageURL={item.bigShoe}
                thumbnail={item.thumbnail}
                changeBigShoeImage={() => {}}
                bigShoeImage=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
