import { Carousel, Image } from 'antd'
import React from 'react'
import swiper1 from '../../assets/images/carousel_1.jpg'
import swiper2 from '../../assets/images/carousel_2.jpg'
import swiper3 from '../../assets/images/carousel_3.jpg'
import styles from './Swiper.module.css'
interface Props {

}
interface State {
    swiper: string[]
}
class SwiperClass extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            swiper: [swiper1, swiper2, swiper3]
        }
    }
    render(){
        return (
            <Carousel >
                {
                    this.state.swiper.map((swiper, index) => (
                        <div key={swiper + index} className={styles.swiper}>
                            <Image height={250} src={swiper} preview={false}/>
                        </div>
                    ))
                }
            </Carousel>
        )
    }
}
export const Swiper = SwiperClass