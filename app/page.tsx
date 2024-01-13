'use client'

import React from "react";
import styles from "./page.module.css";
import { ServicesCard } from "@/app/components/ServicesCard/ServicesCard";
import { ExperiencesCard } from "@/app/components/ExperiencesCard/ExperiencesCard";

const Home = () => {
  return (
    <div>
      <div id="home" className={styles.homeImg}>
        <img
          src="/assets/home-header-bg.svg"
          height="100%"
          width="100%"
          alt="home-header-bg"
        />
      </div>
      <h1 className={styles.homeH1}>Dijital Dünyada Adınızı Elgosoft İle Yazın</h1>
      <button className={styles.homeBtn}>Bizimle iletişime geçin</button>
      <div id="services" className={styles.servicesCardContainer}>
        <ServicesCard
          title="Web Tasarım"
          description="Yaratıcı Çözümler, Elgosoft'un İmzasıdır."
          image="/assets/web-design-icon.png"
        />
        <ServicesCard
          title="Mobil Uygulama"
          description="Mobilde Öne Çıkın, Elgosoft İle Başarıya Adım Atın."
          image="/assets/web-design-icon.png"
        />
        <ServicesCard
          title="IT Destek"
          description="Verimliliği Artırın, IT Danışmanlığında Güvende Olun."
          image="/assets/web-design-icon.png"
        />
        <ServicesCard
          title="ME/MII Destek"
          description="Verimliliği Artırın, IT Danışmanlığında Güvende Olun."
          image="/assets/web-design-icon.png"
        />
      </div>

      <h2 className={styles.homeH2}>
        Teknolojik Dönüşüm İçin Elgosoft Her Zaman Hazır.
      </h2>
      <p className="homeP">Geleceği Elde Edin, İnovasyonla Yönlendirin</p>

      <div className={styles.homeExperienceContainer}>
        <ExperiencesCard value="52 K+" description="Projects Completed" />
        <ExperiencesCard value="52 K+" description="Projects Completed" />
        <ExperiencesCard value="52 K+" description="Projects Completed" />
      </div>

      <div className={styles.homeAboutContainer}>
        <img src="/assets/home-about.svg" alt="home-about-svg" />
        <div id="about">
          <h3 className={styles.homeAboutH3}>HAKKIMIZDA</h3>
          <h2 className={styles.homeAboutH2}>
            Vizyonumuz
            Teknolojik gelişmeleri takip ederek, müşterilerimize yenilikç…
          </h2>
          <p>
            Biz Elgosoft, 2024 yılında kurulmuş bir yazılım şirketiyiz. İleri teknolojiye olan tutkumuz, inovasyon ve uzmanlıkla birleşerek müşterilerimize sektörde öncü hizmetler sunma amacımızı yönlendiriyor.
          </p>
        </div>
      </div>

      <div className={styles.homeReferenceContainer}>
        <img src="/assets/logo.svg" alt="logo" />
        <img src="/assets/logo.svg" alt="logo" />
        <img src="/assets/logo.svg" alt="logo" />
      </div>

      <div id="experiences" className={styles.homeProjectGallery}>
        <h3>PROJE GALERİSİ</h3>
        <h1>Dijital Bakış</h1>
        <div className={styles.homeProjectGalleryGrid}>
          <img src="/assets/project-1.png" alt="project-1" />
          <img src="/assets/project-1.png" alt="project-1" />
          <img src="/assets/project-1.png" alt="project-1" />
        </div>
      </div>

      <div id="contact" className={styles.homeContact}>
        <h2>İletişim</h2>
      </div>
    </div>
  );
};

export default Home;