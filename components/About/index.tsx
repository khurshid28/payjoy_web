"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              {/* <img
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <img
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              /> */}

              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-2xl ">
                {/* Rasm */}
                <img
                  src="/images/about/about-1.png"
                  alt="About"
                  className="object-cover dark:hidden "
                />
                <img
                  src="/images/about/about-1.png"
                  alt="About"
                  
                  className="hidden object-cover dark:block "
                />

                {/* Gradient overlay (pastga yumshoq fade) */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.95)_90%,white_100%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,rgba(52,61,99,0.8)_90%,#2F3657_100%)]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  2025
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Boshlang'ich to'lovlarsiz
                </span>
                <br />
                xaridni amalga oshiring
              </h2>
              <p>
                Maishiy texnika va elektronika endi yanada qulay! Tez
                rasmiylashtirish, mos to‘lov rejasi va ishonchli yetkazib berish
                — barchasi siz uchun. Hech qanday ortiqcha to‘lovlarsiz, hoziroq
                xaridni boshlang.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    12
                  </h3>
                  <p>oygacha</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    20 mln
                  </h3>
                  <p> so'mgacha</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    0%
                  </h3>
                  <p>boshlang‘ich to‘lov</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Qulay {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  xaridlar
                </span>
              </h2>
              <p>
                {/* Сделайте свои покупки максимально комфортными с нашей рассрочкой. Оформите заказ, оплачивайте удобными частями и наслаждайтесь покупкой */}
                Buyurtmangizni rasmiylashtiring, to‘lovni sizga mos qismlarga
                bo‘lib to‘lang va xariddan rohatlaning.
              </p>

              {/* <h4 className="font-medium uppercase text-black dark:text-white">
               Как это работает?
              </h4> */}
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              {/* <img
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <img
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              /> */}

              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-2xl">
                {/* Rasm */}
                <img
                  src="/images/about/about-2.png"
                  alt="About"
                  className="z-0 object-cover dark:hidden"
                />
                <img
                  src="/images/about/about-2.png"
                  alt="About"
                  className="z-0 hidden object-cover dark:block"
                />

                {/* Gradient overlay aniq ko‘rinadigan */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.95)_90%,white_100%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,rgba(52,61,99,0.8)_90%,#2F3657_100%)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
