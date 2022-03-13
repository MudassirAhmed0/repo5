import React from 'react'
import Image from 'next/image'
import contactHero from '../../assets/images2/contact/contact-hero.jpg'
import styles from '../../styles2/contact.module.css'
import overlays from '../../styles2/Overlays.module.css'
import styles2 from '../../styles2/media.module.css'

const Hero = () => {
    return (
        <section className={styles2.heroSection}>
              <span className={`absolute ${styles.heroimg}`}>
                <Image src={contactHero} alt="Contact Hero" />
            </span>
              <span className={`${overlays.contactOverlay} absolute top-0 left-0 w-full h-full`}></span>
            <span className={`${overlays.careerOverlayTwo} absolute top-0 left-0 w-full h-full`}></span>
            <span className='bottomOverlay'>
      </span>
          
            <div className="container  relative text-white uppercase">
                <h1 className='text-4xl medium-font mb-2'>
                    CONTACT US
                </h1>
            </div>
        </section>
    )
}

export default Hero