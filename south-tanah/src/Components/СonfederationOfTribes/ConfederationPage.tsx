import classes from "../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"
import { ButtonHistoryConfederation } from "./Buttons/ButtonHistoryConfederation"
import { ButtonQuestConfederation } from "./Buttons/ButtonQuestConfederation"
import { ButtonStructureConfederation } from "./Buttons/ButtonStructureConfediration"
import Registan from "../../Images/RegistanImg.jpg"


export const ConfederationPage = () => {
    return (
        <div className={classes.confederationPage}>
            <div className={classes.topbar}><HomeButton/>Конфедерация племён<BackButton/></div>
            <div className={classes.overflowInfoConfederation}>
                <div className={classes.infoConfederation}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus placeat repellat aspernatur amet ipsum enim nemo, 
                        sint natus illo porro quos voluptas alias labore inventore vel. 
                        Iusto aut perferendis omnis?
                    </p>
                </div>
            </div>

                <img className={classes.imageConfederationPage} src={Registan} alt="Registan" draggable={"false"}/>
            
            <div className={classes.buttonConfederation}>
                
                <div className={classes.blockButtonHistory}>
                    <p>История</p>
                    <ButtonHistoryConfederation/>
                </div>
                
                <div className={classes.blockButtonStructure}>
                    <p>Структура</p>
                    <ButtonStructureConfederation/>
                </div>
                
                <div className={classes.blockButtonQuest}>
                    <p>Квест</p>
                    <ButtonQuestConfederation/>
                </div>
                
            </div>
        </div>
        
        
    )
}