import classes from "../../../../Styles/StartPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonChoiceConfederation() {
    let navigate = useNavigate();
        function handleClick() {
            navigate("/confederation");
        }
        return (
            <button className={classes.choiceConfederationOfTribes} type="button" title="Confederation of tribes" onClick={handleClick}>Confederation of tribes</button>
        )
}