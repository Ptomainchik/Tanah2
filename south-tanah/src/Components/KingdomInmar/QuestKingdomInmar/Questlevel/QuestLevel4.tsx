import classes from "../../../../Styles/StylesKingdomInmar/QuestLevel.module.css";
import { useState } from "react";
import Sailor from "../../../../Images/Sailor.webp";

export const Level4 = () => {
    const [showMessageQuest, setShowMessageQuest] = useState(true);

    return (
        <div className={classes.questPage}>
            <div className={classes.playingFieldLevel4}>
                <img src={Sailor} alt="Master"  className={classes.characterImg4}/>
            </div>
            {showMessageQuest && <div className={classes.blockMessage}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1}>Yes</p>
                    <p id={"2"} className={classes.answer2}>No</p>
                    <p id={"3"} className={classes.answer3}>Nothing</p>
                </div>
            </div> }
        </div>
    )
}