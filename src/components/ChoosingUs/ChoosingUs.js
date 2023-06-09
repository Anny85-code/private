import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return (
      <div style={{ backgroundColor: '#EFF5F5' }}>
        <div className="container overflow-hidden">
          <p
            data-aos="slide-right"
            data-aos-offset="220"
            className={styles.heading}
          >
            Top three reasons why you should choose us.
          </p>
          <p data-aos="slide-left" className={styles.sub_text}>
            We have stood out from the crowd in these three key areas;
          </p>
          <div className={`row ${styles.sub}`}>
            <div data-aos="fade-right" className="col-md-4">
              <img src={experience} alt="experience" />
              <p className={styles.logo_head}>Experience</p>
              <p className={styles.logo_text}>
                For several years and counting, we've combined service design,
                strategic consulting, technology platforms and operations
                excellence to deliver experience that captivate customers and
                dramatically improve bottom line.
              </p>
            </div>

            <div data-aos="fade" className="col-md-4">
              <img src={communication} alt="experience" />
              <p className={styles.logo_head}>Easy Communication</p>
              <p className={styles.logo_text}>
                Our customers services department is open and social media
                handlers are available 24/7 to interact with clients at
                realtime.
              </p>
            </div>

            <div data-aos="fade-left" className="col-md-4">
              <img src={comfort} alt="experience" />
              <p className={styles.logo_head}>Comfortability</p>
              <p className={styles.logo_text}>
                we believe that comfortability is a key factor in providing
                exceptional service to our clients. We understand that
                navigating logistics, waste management, and construction can be
                a daunting task, which is why we strive to make the process as
                smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChoosingUs;