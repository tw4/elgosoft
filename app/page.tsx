"use client";

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
      <h1 className={styles.homeH1}>
        Dijital Dünyada Adınızı Elgosoft İle Yazın
      </h1>
      <a href="#contact">
        <button className={styles.homeBtn}>Bizimle iletişime geçin</button>
      </a>
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
            Vizyonumuz Teknolojik gelişmeleri takip ederek, müşterilerimize
            yenilikç…
          </h2>
          <p>
            Biz Elgosoft, 2024 yılında kurulmuş bir yazılım şirketiyiz. İleri
            teknolojiye olan tutkumuz, inovasyon ve uzmanlıkla birleşerek
            müşterilerimize sektörde öncü hizmetler sunma amacımızı
            yönlendiriyor.
          </p>
        </div>
      </div>

      <div className={styles.homeReferenceContainer}>
        <img src="/assets/logo.png" alt="logo" />
        <img src="/assets/logo.png" alt="logo" />
        <img src="/assets/logo.png" alt="logo" />
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
        <div className={styles.homeContactForm}>
          <div>
            <img src="/assets/logo.png" height={300} width={350} alt="logo" />
            <p>✉️ e-mail: info@elgosoft.com</p>
            <p>📞 tel: +90 123 456 78 90</p>
            <p>📍 adres: İstanbul</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15036.862219865118!2d28.9783589!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1643195149895"
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
