import React from 'react';
import styles from "./index.module.scss";
import LocationIcon from "../../../public/icons/SVG/location.svg";
import DateIcon from "../../../public/icons/SVG/date.svg";
import CostIcon from "../../../public/icons/SVG/cost.svg";
import Link from "next/link";

function Event() {
  return (
    <div className={styles.eventDetails}>
      <div className={styles.eventDetailsHeader}>
        <h1 className={styles.eventDetailsHeaderHeading}>Open Mic Event Open Mic Event Open Mic  </h1>
        <ul className={styles.eventDetailsHeaderInfo}>
            <li className={styles.eventDetailsHeaderInfoItem}><LocationIcon className={styles.eventDetailsHeaderInfoItemIcon}/><span className={styles.eventsListItemDetailsContentSpan}>  Bengaluru</span></li>
            <li className={styles.eventDetailsHeaderInfoItem}><DateIcon className={styles.eventDetailsHeaderInfoItemIcon}/><span className={styles.eventsListItemDetailsContentSpan}> 11th Oct 7:00 PM</span></li>
            <li className={styles.eventDetailsHeaderInfoItem}><CostIcon className={styles.eventDetailsHeaderInfoItemIcon}/><span className={styles.eventsListItemDetailsContentSpan}> 500</span></li>
        </ul>
      </div>
      <div className={styles.eventDetailsDescription}>
      
      <h1 className={styles.eventDetailsDescriptionHeading}>About The Event</h1>
      <p className={styles.eventDetailsDescriptionContent}>ldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijdldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw ed ldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw edldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw edldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw edldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw edldcqdwld wdijcndwc cjwcwc wc cq wcq cw cw cq chqwqjkewnkeqwdjew wflijeqw qewweldweijd ewd  ewjdw ed</p>
      <div className={styles.bookingButtons}>
      <Link href="/events/booking" ><button className={`${styles.btn} ${styles.btnBrown} ${styles.btnAnimated}`}>BOOK NOW</button></Link>
      <div><button className={`${styles.countButtonDecrement} ${styles.countButton} `}>-</button><input className={styles.countButtonInput} type="number" placeholder='1'/><button className={`${styles.countButtonIncrement} ${styles.countButton}`}>+</button>
      </div>
      </div>
      </div>
    </div>
  )
}


export default Event;