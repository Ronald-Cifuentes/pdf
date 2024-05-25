import { FC } from 'react'
import { CarouselContainer, ImageSlider } from './Carousel.styled'
import { CarouselProps } from './interfaces'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './Carousel.scss'

const settings = {
  modules: [Navigation, Pagination, Autoplay],
  // onSlideChange: () => console.log("slide change"),
  // onSwiper: (swiper) => console.log(swiper),
  loop: true,
  navigation: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
}

const Carousel: FC<CarouselProps> = ({ dataTestId = 'carousel', images }) => {
  return (
    <CarouselContainer data-testid={dataTestId}>
      <Swiper {...{ ...settings, slidesPerView: 'auto' }}>
        {images?.map((image, ind) => (
          <SwiperSlide key={`${ind}`}>{<ImageSlider src={image} alt='' />}</SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
