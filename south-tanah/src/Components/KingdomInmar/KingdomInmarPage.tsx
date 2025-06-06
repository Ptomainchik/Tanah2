import classes from "../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"
import { ButtonHistoryKingdomInmar } from "./Buttons/ButtonHistoryKingdomInmar"
import { ButtonQuestKingdomInmar } from "./Buttons/ButtonQuestKingdomInmar"
import { ButtonStructureKingdomInmar } from "./Buttons/ButtonStructureKingdomInmar"
import Human from "../../Images/HumanImg.jpg"

export const KingdomInmarPage = () => {
    return (
        <div className={classes.kingdomInmarPage}>
            <div className={classes.topbar}><HomeButton/>Королевство Инмар<BackButton/></div>
            <div className={classes.overflowInfoKingdomInmar}>
                <div className={classes.infoKingdomInmar}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad non facilis saepe reiciendis dicta placeat, repudiandae labore? 
                    Laudantium, recusandae? Quisquam magni quae quia cupiditate dolores! 
                    Accusamus sit non qui consequuntur.
                    </p>
                </div>
            </div>
                
                <img className={classes.imageKingdomInmarPage} src={Human} alt="Human" draggable={"false"}/>

            <div className={classes.buttonKingdomInmar}>

                <div className={classes.blockButtonHistory}>
                    <p>История</p>
                    <ButtonHistoryKingdomInmar/>
                </div>

                <div className={classes.blockButtonStructure}>
                    <p>Структура</p>
                    <ButtonStructureKingdomInmar/>
                </div>

                <div className={classes.blockButtonQuest}>
                    <p>Квест</p>
                    <ButtonQuestKingdomInmar/>
                </div>
            </div>
            
        </div>
        
    )
}