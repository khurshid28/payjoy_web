"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Solid - A Complete SaaS Web Template
              </h4> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                 Premium Nasiya
                </span>
                <br />
                {"   "}
                 platformasiga xush kelibsiz !!!
               
              </h1>
              <p>
              Premium Nasiya - bu butun O'zbekiston bo'ylab hamkorlik nuqtalarda foydalanish mumkin bo'lgan, tovar va xizmatlarni muddatli to'lovga xarid qilishga mo'ljallangan xizmatdir.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    <Link
                  href="/support"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                      Biz bilan tezkor aloqa
                    </Link>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Tezkor 24/7 soatlik xizmat ko'rsatamiz
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <img
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <img
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <img
                    className="shadow-solid-l dark:hidden object-fill"
                    src="/images/banner.png"
                    alt="Hero"
                    
                  />
                  <img
                    className="hidden shadow-solid-l dark:block object-fill"
                    src="/images/banner.png"
                    alt="Hero"
                    
                  />
                </div>
              </div>


             
             <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#"
                className=" hover:opacity-90 transition"
              >
                <img
                  src="/images/download/iphone.svg"
                  alt="App Store"
                  width={200}
                  height={100}
                />
              
              </a>

               <a
                href="https://play.google.com/store/apps/details?id=com.premium_pay.premium_pay_seller"
                className=" hover:opacity-90 transition"
              >
               <img
                  src="/images/download/android.svg"
                  alt="Google Play"
                  width={200}
                  height={100}
                />
              
              </a>
              
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
