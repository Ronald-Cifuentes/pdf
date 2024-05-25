import { FC } from 'react'
import { SliderProductsContainer } from './SliderProducts.styled'
import { SliderProductsProps } from './interfaces'

const SliderProducts: FC<SliderProductsProps> = ({ dataTestId = 'slider-products' }) => {
  return (
    <SliderProductsContainer data-testid={dataTestId}>
      <h1>SliderProducts component</h1>
    </SliderProductsContainer>
  )
}

export default SliderProducts
