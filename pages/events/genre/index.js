
import styles from "./genre.module.scss";
import Image from "next/future/image";
import danceImage from "../../../public/img/genres/dance.jpg";
import sportsImage from "../../../public/img/genres/adventureSports.jpg";
import musicFestivalImage from "../../../public/img/genres/musicFestival.jpg";
import theatreImage from "../../../public/img/genres/theatre.jpg";
import artExhibitionImage from "../../../public/img/genres/artExhibition.jpg";
import standupComedyImage from "../../../public/img/genres/open-mic.jpg";
import workshopImage from "../../../public/img/genres/workshop.jpg";
import { useLayoutEffect } from "react";

export default function Genre() {

  useLayoutEffect(()=>{
    
  },[])


  return (
    <div className={styles.genres}>
      <h1 className={styles.genresHeading}>EXPLORE BY GENRE <span className={styles.genresHeadingSpan}>{`>>>`}</span></h1>



    <ul className={styles.genresList}>
        <li className={styles.genresListItem}>
          <Image  src={danceImage} className={styles.genresListItemPhoto} alt="dance-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>PERFORMING ARTS</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={sportsImage} className={styles.genresListItemPhoto} alt="sports-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>ADVENTURE SPORTS</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={musicFestivalImage} className={styles.genresListItemPhoto} alt="music-fest-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>MUSIC FESTIVAL</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={artExhibitionImage} className={styles.genresListItemPhoto} alt="art-exhibition-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>ART EXHIBITION</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={standupComedyImage} className={styles.genresListItemPhoto} alt="standup-comedy-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>STANDUP COMEDY</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={workshopImage} className={styles.genresListItemPhoto} alt="workshop-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>WORKSHOPS</span>
          </div>
        </li>
        {/* <li className={styles.genresListItem}>
          <Image  src={danceImage} className={styles.genresListItemPhoto} alt="dance-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>DANCE</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={danceImage} className={styles.genresListItemPhoto} alt="dance-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>DANCE</span>
          </div>
        </li>
        <li className={styles.genresListItem}>
          <Image  src={danceImage} className={styles.genresListItemPhoto} alt="dance-image"/>
          <div className={styles.genresListItemBackface}>
            <span className={styles.genresListItemBackfaceSpan}>DANCE</span>
          </div>
        </li> */}


    </ul>

    </div>
  )
}
