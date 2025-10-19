import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Docs page for Solid Pro",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="News-details News-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Ommaviy oferta </h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Mazkur hujjat “Premium Nasiya” xizmatidan foydalanish
                  shartlarini belgilovchi ommaviy oferta hisoblanadi. Ushbu matn
                  namunaviy shaklda taqdim etilgan bo‘lib, faqat namoyish va
                  ma’lumot uchun mo‘ljallangan. U rasmiy huquqiy hujjat sifatida
                  foydalanish uchun mo‘ljallanmagan.
                </p>
                {/* <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p> */}

                <a
                  href="/docs/ommaviy-oferta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-orange-500"
                >
                  PDF shaklida ochish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
