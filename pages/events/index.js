import React, { Fragment } from 'react';
import styles from "./scss/index.module.scss";
import Image from "next/future/image";
import eventImage1 from "../../public/img/events/open-mic.jpg";
import eventImage2 from "../../public/img/events/open-mic1.jpg";
import LocationIcon from "../../public/icons/SVG/location.svg";
import DateIcon from "../../public/icons/SVG/date.svg";
import CostIcon from "../../public/icons/SVG/cost.svg";
import Link from 'next/link';
import { useSelector } from 'react-redux';




function AllEvents() {
  const user = useSelector((state)=> state.user);
  console.log("###############\n",user);
  const isAuthenticated = true;

  return (
            <div className={styles.eventsList}>
              <div className={styles.eventsListItem}>
                 <div className={styles.eventsListItemImage}> <Image  src={eventImage1} className={styles.eventsListItemPhoto} alt="event-image"/></div>
                <Link href="/events/id" >
                <div className={styles.eventLink}>
                  <div className={styles.eventsListItemDetails}>
                    <h2 className={styles.eventsListItemDetailsHeading}>Open Mic Event Open Mic Event Open Mic </h2>
                    <ul className={styles.eventsListItemDetailsContent}>
                      <li className={styles.eventsListItemDetailsContentItem}><LocationIcon className={styles.eventsListItemDetailsContentIcon}/> <span className={styles.eventsListItemDetailsContentSpan}>Bengaluru</span></li>
                      <li className={styles.eventsListItemDetailsContentItem}><DateIcon className={styles.eventsListItemDetailsContentIcon}/> <span className={styles.eventsListItemDetailsContentSpan}>11th Oct 7:00 PM</span></li>
                      <li className={styles.eventsListItemDetailsContentItem}><CostIcon className={styles.eventsListItemDetailsContentIcon}/> <span className={styles.eventsListItemDetailsContentSpan}>500</span></li>
                    </ul>
                  </div>
                  <span className={styles.eventsListItemGoto}>{`>>>`}</span>
                </div>
                </Link>
              </div>
              <div className={styles.eventsListItem}>
              <div className={styles.eventsListItemImage}><Image  src={eventImage2} className={styles.eventsListItemPhoto} alt="event-image"/></div>
                <Link href="/events/id" >
                <div className={styles.eventLink}>
                <div className={styles.eventsListItemDetails}>
                  <h2 className={styles.eventsListItemDetailsHeading}>Open Mic Event</h2>
                 <ul className={styles.eventsListItemDetailsContent}>
                 <li className={styles.eventsListItemDetailsContentItem}><LocationIcon className={styles.eventsListItemDetailsContentIcon}/><span className={styles.eventsListItemDetailsContentSpan}> Bengaluru</span></li>
                 <li className={styles.eventsListItemDetailsContentItem}><DateIcon className={styles.eventsListItemDetailsContentIcon}/><span className={styles.eventsListItemDetailsContentSpan}> 11th Oct 7:00 PM</span></li>
                 <li className={styles.eventsListItemDetailsContentItem}><CostIcon className={styles.eventsListItemDetailsContentIcon}/><span className={styles.eventsListItemDetailsContentSpan}> 500</span></li>
                 </ul>
                  </div>
                  <span className={styles.eventsListItemGoto}>{`>>>`}</span>
                </div>
                </Link>
              </div>
            </div>
  )
}

export default AllEvents;