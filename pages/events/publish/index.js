import {  useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./publish.module.scss";


export default function Publish() {

  const router = useRouter();
  // const user = useSelector((state)=> state.auth.user);
  // const dispatch = useDispatch();


  // useEffect(()=>{
  //   if(!user){
  //   dispatch(navActions.togglePublishButton({active:false}));
  //   router.push("/auth?publish=true");
  // }
  // },[user,dispatch,router]);

  // if(!user){
  //   dispatch(navActions.togglePublishButton({active:false}));
  //   router.push("/auth?publish=true");
  // }

  const [genre, setGenre] = useState("");
  const [upload,setUpload] = useState(false);

  return (
    <div className={styles.publish}>
      <h1 className={styles.publishHeading}>PUBLISH YOUR EVENT <span className={styles.publishHeadingSpan}>{`>>>`}</span></h1>
      <form className={styles.publishForm}>
        <div className={styles.publishFormGroup}>
          <input id="title" className={styles.publishFormGroupInput} type="text" maxLength={40} placeholder="Title" />
          <label htmlFor="title" className={styles.publishFormGroupLabel}>Title</label>
        </div>
      
        <div className={styles.publishFormGroup}>
          <input id="location" className={styles.publishFormGroupInput} type="text" placeholder="Venue"/>
          <label htmlFor="location" className={styles.publishFormGroupLabel}>Venue</label>
       </div>
        <div className={styles.publishFormGroup}>
          <input id="cost" className={styles.publishFormGroupInput} type="number" placeholder="Cost"/>
          <label htmlFor="cost" className={styles.publishFormGroupLabel}>Cost</label>

        </div>
        
        
        
        <div className={styles.publishFormGroup}>
          <textarea id="description" className={styles.publishFormGroupInput} placeholder="Description"/>
          <label htmlFor="description" className={`${styles.publishFormGroupLabel}  ${styles.marginBottom2}` }>Description</label>

        </div>
        <div className={`${styles.publishFormGroup} ${styles.marginTop3}`}>
          <input id="genre" type="text" className={`${styles.publishFormGroupInputGenre} ${styles.publishFormGroupInput} `} placeholder="Genre" value={genre}/>
            <label htmlFor="genre" className={`${styles.publishFormGroupLabel} ${styles.publishFormGroupLabelGenre}  `}>Genre</label>

          <ul name="genre"  className={styles.publishFormGroupInputGenreOptions}>
            <li className={styles.publishFormGroupInputGenreOption} value="Performing Arts" onClick={e=> setGenre("Performing Arts")}>Performing Arts</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Adventure Sports" onClick={e=> setGenre("Adventure Sports")}>Adventure Sports</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Music Festival" onClick={e=> setGenre("Music Festival")}>Music Festival</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Art Exhibition" onClick={e=> setGenre("Art Exhibition")}>Art Exhibition</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Standup Comedy" onClick={e=> setGenre("Standup Comedy")}>Standup Comedy</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Workshops" onClick={e=> setGenre("Workshops")}>Workshops</li>
            <li className={styles.publishFormGroupInputGenreOption} value="Others" onClick={e=> setGenre("Others")}>Others</li>

          </ul>
          {/* <input id="genre" className={styles.publishFormGroupInput} type="text" placeholder="Genre"/> */}

        </div>
        <div className={` ${styles.publishFormGroup} ${styles.horizontalAlign}`}>
          <label  className={`${styles.publishFormGroupLabelCoverPhoto} ${styles.publishFormGroupLabel}`}>Cover Photo</label>
          <div className={styles.publishFormGroupRadioOption}>
            <input type="radio" className={styles.publishFormGroupRadioOptionButton} id="default" name="coverPhotoOption" defaultChecked onClick={e=> setUpload(false)}/>
            <label htmlFor="default" className={styles.publishFormGroupRadioOptionLabel}>Default</label>
          </div>
          <div className={`${styles.horizontalAlign} ${styles.publishFormGroupRadioOption}`}>
          <div>
          <input type="radio" className={styles.publishFormGroupRadioOptionButton} id="chooseFile" name="coverPhotoOption" onClick={e=> setUpload(true)}/>
          
            <label htmlFor="chooseFile" className={styles.publishFormGroupRadioOptionLabel}>Upload</label>
            </div>

          {upload && <input className={`${styles.publishFormGroupInputFile}`} id="coverPhoto" type="file" inputProps={{ accept: 'image/*' }}  />}
          </div>
        </div>
        <button className={styles.publishFormButton} > Publish</button>
      </form>
    </div>
  )
}
