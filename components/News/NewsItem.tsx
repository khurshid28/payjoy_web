"use client";
import { News } from "@/types/news";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ News }: { News: News }) => {
  const { mainImage, title, metadata } = News;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`news/`} className="relative block aspect-[368/239]">
          {/* <img src={mainImage} alt={title} fill className="object-cover rounded-lg" /> */}

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            {/* Rasm */}
            <img src={mainImage} alt={title} className="absolute inset-0 h-full w-full object-cover object-top" />

            {/* Gradient overlay — yumshoq, rasm ko‘rinadi */}
            <div className="pointer-events-none absolute inset-0">
              <div className="h-full w-full bg-gradient-to-b from-transparent to-white/40 dark:to-[#2F3657]/40" />
            </div>
          </div>
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/news/news-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default NewsItem;
