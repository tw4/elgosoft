"use client";

import { MainSectionLayout } from "@/app/layouts/MainSectionLayout";
import { Navbar } from "@/app/components/Navbar";
import { FaqCard } from "@/app/components/FaqCard";
import { HomePageStepCard } from "@/app/components/HomePageStepCard";
import React, { useState } from "react";

const Home = () => {
  const bannerList = [
    "/assets/banner-01.svg",
    "/assets/banner-02.svg",
    "/assets/banner-03.svg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };
  return (
    <main>
      <Navbar />
      <MainSectionLayout id="howitworks" className="bg-[#E0EAF3]">
        <h1 className="font-bold leading-[70px] text-6xl pt-24 text-center md:text-4xl sm:text-3xl">
          Webinizdeki <span className="text-blue-500"> Potansiyeli </span> Açığa
          Çıkaran
          <span className="text-blue-500"> Elgosoft </span> ile Webin
          <span className="text-blue-500"> Gücünü </span>
          Yeniden Keşfedin!
        </h1>
        <div className="flex flex-row justify-evenly pt-12 font-bold  space-x-3 sm:flex-col sm:justify-center sm:items-ce sm:space-x-0">
          <div className="flex  flex-row space-x-3 items-center">
            <img className="w-5 h-5" src="/assets/checked.png" alt="checked" />
            <p>Ekip kurma sıkıntısına son</p>
          </div>
          <div className="flex flex-row space-x-3 items-center">
            <img className="w-5 h-5" src="/assets/checked.png" alt="checked" />
            <p>Müşteri odaklı iletişim</p>
          </div>
          <div className="flex flex-row space-x-3 items-center">
            <img className="w-5 h-5" src="/assets/checked.png" alt="checked" />
            <p>Zamanında teslim</p>
          </div>
        </div>
        <div className="text-center pt-12">
          <a
            href="mailto:info@elgosoft.com?subject=İletişim%20Talebi&body=Merhaba,%20size%20ulaşmak%20istiyorum."
            className="bg-blue-600 rounded-xl text-white pr-10  pl-10 pt-2 pb-2 hover:cursor-pointer"
          >
            Bizimle İletişime Geçin
          </a>
          <img
            className="m-auto pt-10 h-[600px]"
            src="/assets/home-header-img.svg"
            alt="header-img"
          />
        </div>
      </MainSectionLayout>
      <MainSectionLayout className="bg-[#292526]">
        <h2 className="text-white text-4xl text-center pt-10 pb-20">
          Müşterilerimize sunduğumuz yazılım çözümleri sayesinde işletmelerin
          daha hızlı büyümesini sağlıyoruz.
        </h2>
        {/*<div className="flex flex-row justify-between pt-10 pb-20 text-white text-3xl">*/}
        {/*  <p>LOGO</p>*/}
        {/*  <p>LOGO</p>*/}
        {/*  <p>LOGO</p>*/}
        {/*  <p>LOGO</p>*/}
        {/*</div>*/}
      </MainSectionLayout>
      <MainSectionLayout id="about" className="bg-[#F6F6F6]">
        <h2 className="text-5xl mt-20 font-bold text-center sm:text-3xl">
          Girişiminizin <span className="text-blue-500"> başarılı </span>{" "}
          olmasına yardımcı olmak için burada olan{" "}
          <span className="text-blue-500"> tutkulu </span> ve
          <span className="text-blue-500"> meraklı </span> bir ekip
        </h2>
        <p className="pr-40 pl-40 text-center mt-5 lg:pr-10 lg:pl-10 md:pr-20 md:pl-20 sm:pr-10 sm:pl-10">
          İşletmenizin başarısı için buradayız. Tutkulu ve meraklı ekibimiz,
          kullanıcı odaklı tasarımlar ve inovatif yazılım çözümleriyle projenizi
          üst düzeye taşıyor. Başarınız bizim önceliğimiz.
        </p>
        <div className="grid grid-cols-3 gap-5 mt-14 lg:grid-cols-2 sm:grid-cols-1">
          <div className="text-center space-y-3">
            <img
              className="m-auto h-[130px]"
              src="/assets/icon-1.svg"
              alt="icon"
            />
            <h3 className="font-bold text-2xl lg:h-14 lg:text-xl sm:h-fit ">
              Maksimum Müşteri Memnuniyeti
            </h3>
            <p>
              %99 Müşteri Memnuniyeti: Başarıya giden yolda sizinle bir adım öne
              geçiyoruz.
            </p>
          </div>
          <div className="text-center space-y-3">
            <img
              className="m-auto h-[130px]"
              src="/assets/icon-2.svg"
              alt="icon"
            />
            <h3 className="font-bold text-2xl lg:h-14 lg:text-xl sm:h-fit">
              Yenilikçi Ekip
            </h3>
            <p>
              Yenilikçi Ekip: Problemleri çözmek ve başarıya ulaşmak için
              buradayız.
            </p>
          </div>
          <div className="text-center space-y-3">
            <img
              className="m-auto h-[130px]"
              src="/assets/icon-3.svg"
              alt="icon"
            />
            <h3 className="font-bold text-2xl lg:h-12 lg:text-xl sm:h-fit">
              Sürekli Destek
            </h3>
            <p>
              Sürekli Destek: İhtiyaçlarınıza anında çözüm sunan bir ekibin
              yanında olun.
            </p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500"> Elgosoft'ta </span> nasıl
            çalışıyoruz ?
          </h2>

          <p className="pr-20 pl-20 mt-5 md:pr-16 md:pl-16 sm:pr-5 sm:pl-5">
            Elgosoft, profesyonel yaklaşımıyla web tasarım, mobil uygulama ve
            bilişim teknolojilerinde çözüm odaklı hizmetler sunan bir yazılım
            ajansıdır. İlk adımda, müşteriyle işbirliği yaparak ihtiyaç analizi
            yapar ve projenin temel hedeflerini belirler. Ardından,
            özelleştirilmiş çözümler geliştirerek modern tasarım ve
            teknolojileri birleştirir. Elgosoft, projeleri tamamlandıktan sonra
            sürekli destek ve iyileştirme sunarak müşterinin başarı hikayesine
            katkıda bulunur.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-20 pb-20 lg:grid-cols-2 sm:grid-cols-1">
          <HomePageStepCard
            stepIconUrl="/assets/01-icon.svg"
            stepTitle="Müşteri ihtiyaç ve hedeflerinin belirlenmesi"
            stepImageUrl="/assets/peaple-01.svg"
            stepDescription=" Elgosoft, projenin temelini oluşturan ilk adımda müşteriyle yakın
              bir işbirliği kurar. Profesyonel analistlerimiz, müşterinin
              beklentilerini anlamak için kapsamlı bir ihtiyaç analizi yapar."
          />

          <HomePageStepCard
            stepIconUrl="/assets/02-icon.svg"
            stepTitle="Özelleştirilmiş çözüm geliştirme"
            stepImageUrl="/assets/peaple-02.svg"
            stepDescription="Belirlenen müşteri ihtiyaçlarına dayalı olarak Elgosoft, özgün ve
              etkili çözümler geliştirme sürecine geçer. Profesyonel yazılım
              geliştirme ekibimiz, modern web tasarımı."
          />

          <HomePageStepCard
            stepIconUrl="/assets/03-icon.svg"
            stepTitle="Elgosoft ile sürekli iyileştirme ve destek."
            stepImageUrl="/assets/peaple-03.svg"
            stepDescription="Proje tamamlandığında Elgosoft, müşterisine sadece bir çözüm
              sağlamakla kalmaz, aynı zamanda sürekli destek ve iyileştirme
              hizmeti sunar. Müşteri geri bildirimleri ve pazar dinamikleri
              doğrultusunda."
          />
        </div>
      </MainSectionLayout>
      <MainSectionLayout id="work" className="bg-[#292526] text-white">
        <h2 className="text-3xl text-center mt-20">
          <span className="text-blue-500">UI/UX</span> tasarımları işletmeleri
          nasıl <span className="text-blue-500"> zirveye </span> taşıyor?
        </h2>
        <div className="mt-10 space-y-5 pb-32">
          <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-ride="carousel"
          >
            {/* Carousel indicators */}
            <div
              className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
                    currentSlide === index ? "opacity-100" : "opacity-50"
                  } transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none`}
                  aria-current={currentSlide === index}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Carousel items */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {bannerList.map((data, index) => (
                <div
                  key={index}
                  className={`relative float-left ${
                    currentSlide === index ? "" : "-mr-[100%] hidden"
                  } w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none`}
                  data-te-carousel-active
                  data-te-carousel-item
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={data}
                    className="block w-full"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Carousel controls - prev item */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              onClick={handlePrevSlide}
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>

            {/* Carousel controls - next item */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              onClick={handleNextSlide}
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
        {/* TODO: This area will be activated in the future */}
        {/*<div className="mt-20">*/}
        {/*  <p className="text-xl pr-52 pl-52 xl:pr-40 xl:pl-40 md:pr-32 md:pl-32 sm:pr-16 sm:pl-16">*/}
        {/*    Elgosoft, ana sorunları belirleyip yeni bir kullanıcı deneyimi*/}
        {/*    tasarlayarak bizi memnun eden bir yaklaşım sergiledi. Yeniden*/}
        {/*    tasarım, bizi ileri taşımanın ötesine geçti, erişilebilir ve*/}
        {/*    anlaşılır bir deneyim sunarak olumlu bir etki yarattı.*/}
        {/*  </p>*/}
        {/*  <div className=" flex flex-col items-center text-center">*/}
        {/*    <div className="flex flex-row items-center mt-10">*/}
        {/*      <img src="/assets/avatar.svg" alt="avatar" />*/}
        {/*      <div className="flex flex-col pl-5">*/}
        {/*        <p className="text-blue-500 text-center">Mert Sabinov</p>*/}
        {/*        <p className="text-center">VP of Product at Socure</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <button*/}
        {/*      className="bg-gray-500 rounded-xl text-white pr-10  pl-10 pt-2 pb-2 mt-10 mb-20"*/}
        {/*      disabled*/}
        {/*    >*/}
        {/*      örnek olay incelemelerimize bakın*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </MainSectionLayout>
      <MainSectionLayout id="faq" className="bg-[#F6F6F6]">
        <div className="space-y-3">
          <h2 className="text-center font-bold text-3xl pt-20">
            <span className="text-blue-500">Sık</span> sorulan sorularımız
          </h2>
          <div>
            <FaqCard
              question="Elgosoft'un temel hizmet alanları nelerdir?"
              answer="Elgosoft, web tasarım, mobil tasarım ve IT hizmetleri sağlamaktadır."
            />
            <FaqCard
              question="Elgosoft'un önceki projelerinde elde ettiği başarı hikayeleri nelerdir?"
              answer="Elgosoft'un önceki projeleri, web tasarım, mobil tasarım ve IT hizmetleri alanlarında başarı hikayeleri içermektedir. Müşteri memnuniyetini odak noktasına alarak, projelerde olumlu sonuçlar elde etmekteyiz."
            />
            <FaqCard
              question="Elgosoft'un teslimat süreçleri nasıl işler?"
              answer="Elgosoft'un teslimat süreçleri, müşterinin ihtiyaçlarına göre özelleştirilmiş olarak şekillenir. Projenin gereksinimlerine bağlı olarak hızlı ve etkili teslimat sağlamak için çaba gösteriyoruz."
            />
            <FaqCard
              question="Müşteriler, Elgosoft ile nasıl iletişim kurabilir ve destek alabilir?"
              answer="Müşteriler, Elgosoft ile çeşitli iletişim kanalları aracılığıyla temas kurabilirler. Destek talepleri için müşteri hizmetleri ekibimiz her zaman hazır ve erişilebilirdir, ayrıca online platformlar üzerinden de iletişim kurabilirler."
            />
          </div>
          <h2 className="text-4xl text-center font-bold pt-20">
            Birlikte <span className="text-blue-500"> muhteşem </span> bir
            gelecek inşa edelim!
          </h2>
          <p className="text-center">
            Haftanın 5 günü 09:00 ile 17:00 saatleri arasında bize
            ulaşabilirsiniz. Müşteri memnuniyeti odaklı hizmetimizle,
            sorularınızı yanıtlamak ve ihtiyaçlarınıza çözüm sunmak için
            buradayız.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:info@elgosoft.com?subject=İletişim%20Talebi&body=Merhaba,%20size%20ulaşmak%20istiyorum."
              className="bg-blue-600 rounded-xl text-white pr-10  pl-10 pt-2 pb-2 hover:cursor-pointer"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
          <img
            className="m-auto h-[600px]"
            src="/assets/home-header-img.svg"
            alt="icon"
          />
        </div>
      </MainSectionLayout>
      <MainSectionLayout className="bg-[#1D1D1D] text-center text-white pb-5">
        <p>© 2024 - All rights reserved</p>
      </MainSectionLayout>
    </main>
  );
};

export default Home;
