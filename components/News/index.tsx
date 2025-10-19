import React from "react";
import SectionHeader from "../Common/SectionHeader";
import NewsItem from "./NewsItem";
import NewsData from "./NewsData";

const News = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Yangiliklar va xabarlar`,
              subtitle: `So'ngi yangiliklar va xabarlar`,
              description: ` Premium Nasiya platformasining eng so‘ngi yangiliklari bilan tanishing. 
    Siz uchun foydali ma’lumotlar, aksiyalar va xizmatlardagi yangilanishlar shu yerda e’lon qilinadi.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {NewsData.slice(0, 3).map((News, key) => (
            <NewsItem News={News} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
