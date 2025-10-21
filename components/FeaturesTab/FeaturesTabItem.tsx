import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          {/* <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2> */}
          <p className="mb-5">{desc1}</p>
          {/* <p className="w-11/12">{desc2}</p> */}
        </div>
        {/* <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <img src={image} alt={title} fill className="dark:hidden" />
          <img
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div> */}

{/* <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
  <div
    className="p-10 rounded-xl 
               bg-[linear-gradient(to_bottom,_#FFE9B0_20%,_#FFF8E1_90%)] 
               dark:bg-[linear-gradient(to_bottom,_#343D63_20%,_#2F3657_90%)]"
  >
    <div className="relative aspect-[562/366] overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        fill
        className="object-cover dark:hidden"
      />
      <img
        src={imageDark}
        alt={title}
        fill
        className="hidden dark:block object-cover"
      />
    </div>
  </div>
</div> */}
<div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
  <div className="p-10 rounded-xl overflow-hidden ">
    <div className="relative aspect-[562/530] rounded-lg overflow-hidden">
      {/* Rasm */}
      <img
        src={image}
        alt={title}
        
        className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 dark:hidden"
      />
      <img
        src={imageDark}
        alt={title}
        className="hidden dark:block absolute inset-0 h-full w-full object-cover  object-top transition-all duration-500"
      
     
      />

      {/* Yumshoq, qisqa oqish effekti */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_70%,_rgba(255,255,255,0.85)_95%,_white_100%)] dark:bg-[linear-gradient(to_bottom,_transparent_70%,_rgba(47,54,87,0.7)_95%,_#181C31_100%)]" />
    </div>
  </div>
</div>

        
      </div>
    </>
  );
};

export default FeaturesTabItem;
