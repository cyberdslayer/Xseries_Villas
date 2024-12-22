'use client'

import styles from "./page.module.css";
import Header  from "./components/header/page";
import Hero  from "./components/hero/page";
import Reviews  from "./components/reviews";
import AboutIconsList  from "./components/aboutIconsList";
import About  from "./components/about/page";
import Amenities  from "./components/amenities/page";
import Meals  from "./components/meals/page";
import Location  from "./components/location/page";
import Footer  from "./components/footer/page";
import Form  from "./components/availability-form/page";
import MobilePrice from "./components/availability-price/page";
import RealMoments from "./components/real-moments/page";
import RoomsAndBeds from "./components/rooms-and-beds/page"

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Header />
      <Form />
      <Hero />
      <main className={styles.main}>
        <Reviews />
        <AboutIconsList />
        <About />
        <Amenities />
        <Meals /> 
        <RealMoments/>
        <Location />
        <RoomsAndBeds/>
      </main>
      <Footer />
      <MobilePrice />
    </div>
  );
}
