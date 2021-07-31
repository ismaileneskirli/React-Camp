import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { chars } from "./chars.js";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    id: 1,
    name: "Enes",
  },
  {
    id: 2,
    name: "Ahmet",
  },
  {
    id: 3,
    name: "Mehmet",
  },
  {
    id: 4,
    name: "faruk",
  },
];

function App() {
  // const [people, setPeople] = useState(chars);
  // const [index, setIndex] = useState(0);
  //console.log(chars[0]);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content">{user.name}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
