
import { ReactComponent as CheckSVG} from '../Estilos/check.svg';
import { ReactComponent as DeleteSVG} from '../Estilos/DeleteIcon';



function TodoIcon({type}){
    return (
        <span
            className={`Icon Icon-svg Icon-${type}`}>
            <CheckSVG />        
        </span>
    );
}

export default TodoIcon;