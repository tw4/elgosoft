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
          image="/assets/web-design.png"
        />
        <ServicesCard
          title="Mobil Uygulama"
          description="Mobilde Öne Çıkın, Elgosoft İle Başarıya Adım Atın."
          image="/assets/mobile-development.png"
        />
        <ServicesCard
          title="IT Destek"
          description="Verimliliği Artırın, IT Danışmanlığında Güvende Olun."
          image="/assets/technical-support.png"
        />
        <ServicesCard
          title="ME/MII Destek"
          description="Verimliliği Artırın, IT Danışmanlığında Güvende Olun."
          image="/assets/sap.png"
        />
      </div>

      <h2 className={styles.homeH2}>
        Teknolojik Dönüşüm İçin Elgosoft Her Zaman Hazır.
      </h2>
      <p className="homeP">Geleceği Elde Edin, İnovasyonla Yönlendirin</p>

      <div className={styles.homeExperienceContainer}>
        <ExperiencesCard value="99+" description="Tamamlaman Proje" />
        <ExperiencesCard value="50+" description="Müşteri" />
        <ExperiencesCard value="%99" description="Memnuniyet" />
      </div>

      <div className={styles.homeAboutContainer}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FiP8TPuF-kw?si=LAX0VPc-wURw9DuH"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
          <div id="about">
              <h3 className={styles.homeAboutH3}>HAKKIMIZDA</h3>
              <p>
                  Biz Elgosoft, 2024 yılında kurulmuş bir yazılım şirketiyiz. İleri teknolojiye olan tutkumuz, inovasyon ve uzmanlıkla birleşerek müşterilerimize sektörde öncü hizmetler sunma amacımızı yönlendiriyor.
              </p>
              <h2 className={styles.homeAboutH2}>
                  Vizyonumuz
              </h2>
              <p>
                  eknolojik gelişmeleri takip ederek, müşterilerimize yenilikçi ve en son teknoloji çözümler sunmak; iş süreçlerini optimize etmek ve sürdürülebilir başarıya katkıda bulunmak.
              </p>
                <h2 className={styles.homeAboutH2}>
                    Misyonumuz
                </h2>
              <p>
                  Müşteri memnuniyetini odak noktamız yaparak, web tasarımından mobil uygulama geliştirmeye, IT danışmanlığından endüstriyel otomasyona kadar geniş bir yelpazede hizmetler sunarak iş dünyasının ihtiyaçlarına çözümler üretmek.
              </p>
          </div>
      </div>

        <div className={styles.homeReferenceContainer}>
            <img src="/assets/logo.png" alt="logo"/>
            <img src="/assets/logo.png" alt="logo"/>
            <img src="/assets/logo.png" alt="logo"/>
        </div>

        <div id="experiences" className={styles.homeProjectGallery}>
        <h3>PROJE GALERİSİ</h3>
        <h1>Dijital Bakış</h1>
        <div className={styles.homeProjectGalleryGrid}>
          <img src="/assets/project-1.png" alt="project-1" />
          <img src="/assets/project-2.png" alt="project-1" />
          <img src="/assets/project-3.png" alt="project-1" />
        </div>
      </div>

      <div id="contact" className={styles.homeContact}>
        <h2>İletişim</h2>
        <div className={styles.homeContactForm}>
          <div>
            <img src="/assets/logo.png" width={200} alt="logo" />
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
