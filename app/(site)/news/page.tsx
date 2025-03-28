import NewsData from "@/components/News/NewsData";
import NewsItem from "@/components/News/NewsItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is News page for Solid Pro"
};

const NewsPage = async () => {
  return (
    <>
      {/* <!-- ===== News Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {NewsData.map((post, key) => (
              <NewsItem key={key} News={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== News Grid End ===== --> */}
    </>
  );
};

export default NewsPage;
