import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css'
import styles from '../../styles2/media.module.css'
import HeroImg from '../../assets/images2/Zajil-Mobile-Application/banner/app-banner.png'

const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute top-0 left-0 h-full w-full img_container'>
                <Image src={HeroImg} />
            </span>
            <span className={`absolute  ${overlays.theappOverlay}`}></span>
            <span className={`absolute  ${overlays.secondAppOverlay}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white uppercase">
                <h1 className='text-4xl medium-font mb-2'>
                    TERMS OF USE
                </h1>
            </div>
        </section>
    )
}

export default Hero