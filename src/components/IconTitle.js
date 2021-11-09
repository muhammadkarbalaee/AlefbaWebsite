import {ReactComponent as Icon} from "../assets/images/logo.svg";
import '../stylesheets/main-page.scss'
const IconTitle = () => {
    return(
        <div id={'icon-title-group'}>
            <p id={'title'}>
                الفبا
            </p>
            <div id={'icon'}>
                <Icon/>
            </div>
        </div>
    )
}

export default IconTitle;