// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.scss'




export default function Banner({imgs}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1} //一頁顯示幾個slide
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imgs.map((img,i)=>{
                    return(
                        <SwiperSlide key={i}>
                            <img src={img.image} alt="" className='object-cover w-100' style={{height:'500px'}}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}