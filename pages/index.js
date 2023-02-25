import Image from 'next/image';
import Link from 'next/link';
import {  useRouter } from 'next/router';
import { useRef } from 'react';
import styles from '../styles/Home.module.scss';

export default function LandingPage() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const router = useRouter();
  const onSubmit = async (event)=>{
    event.preventDefault();
    router.push(`/auth/${emailRef.current.value}`);
  }
  return (
    <div className={styles.container}>
     <div className={styles.header}>
      <div className={styles.headerLogoBox}>
        <img src="/img/white-logo.png" alt="Logo" className={styles.headerLogo} />
      </div>
      <div className={styles.headerTextBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryTop}> {`<<<`} </span>
          <span className={styles.headingPrimaryMain}>Zippy</span>
          <span className={styles.headingPrimarySub}>{`What's Next?`}</span>
          <span className={styles.headingPrimaryBottom}>{`>>>`}</span>
        </h1>
        <Link href="/events" ><button className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated} ${styles.marginTop5}`}>EXPLORE NOW</button></Link>
      </div>
    </div>
    <main>
      <section className={styles.sectionAbout}>
      <label htmlFor="name"><h2 className={styles.headingSecondary}>Book your next event</h2></label>
        <div className={`${styles.sectionAboutContent} ${styles.marginTop5}`}>
          <div className={`${styles.paddingBottom12} ${styles.padding4}  ${styles.sectionAboutContentText}`}>
            <div className={styles.text}>
              <h3 className={`${styles.tertiaryHeading} ${styles.marginBottom1andhalf}`}>
                Explore events in different genres
              </h3>
              <p className={styles.tertiaryHeadingDescription}>
                No matter what your mood is, we have events for all mindsets
                whether it be comedy shows, music festivals, workshops to
                improve yourself in personal or professional aspects and many
                more.
              </p>
            </div>
            <div className={styles.text}>
              <h3 className={`${styles.tertiaryHeading} ${styles.marginBottom1andhalf}`}>Publish your own events</h3>
              <p className={styles.tertiaryHeadingDescription}>
                Not only you can participate in events but also publish your
                own. Manage passes of your event through our platform.
              </p>
            </div>
          </div>
          <section className={styles.sectionAboutContentImages}>
            <div className={styles.animatedFrame}>
              <img src="/img/col-1.jpg" alt="image-1" className={`${styles.animatedFramePhoto} ${styles.animatedFramePhoto1}`}/>
              <img src="/img/col-2.jpg" alt="image-2" className={`${styles.animatedFramePhoto} ${styles.animatedFramePhoto2}`}/>
              <img src="/img/col-3.jpg" alt="image-3" className={`${styles.animatedFramePhoto} ${styles.animatedFramePhoto3}`}/>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.registerSection}>
        <div className={styles.registrationForm}>
          
          
          <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.formLabel}><h2 className={`${styles.headingForm} ${styles.marginBottom5} ${styles.marginLeft2}`}>
              start booking now
            </h2></label>
            
            <div className={styles.formGroup}>
              <input type="email" className={styles.formInput} id="email" placeholder="Email" ref={emailRef}/>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
            </div>
            <div className={styles.formGroup}>
                <button className={`${styles.btn} ${styles.btnBrown}`}>Get Started</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  
  <footer className={styles.footer}>
    
    <div className={styles.footerLogos}>
      <img src="/img/white-logo.png" alt="zippy-logo" className={`${styles.footerLogo} ${styles.footerBrandLogo}`}/>
      <a href="https://www.github.com/vinniiee"><img src="/img/github-mark/GitHub-Mark-120px-plus.png" alt="footer-logo-1" className={`${styles.footerLogo} ${styles.footerLogo2}`}/></a>
    <a href="https://leetcode.com/vinniiee/"><img src="/img/leetcode.png" alt="footer-logo-2" className={`${styles.footerLogo} ${styles.footerLogo2}`}/></a>
    </div>
    <p className={styles.footnote}>&copy; vinniiee 2022</p>
   
  </footer>
  </div>
  )
}