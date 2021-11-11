import {ReactComponent as Pattern} from "../assets/images/main/main-pattern.svg";
import {ReactComponent as Papers} from "../assets/images/main/papers.svg";
import IconTitle from "./IconTitle";
import '../stylesheets/main-section.scss';

const MainSection = () => {
    return(
        <div>
            <IconTitle/>
            <p id={'orange-text'}>
                نويسه خوان الفبا
            </p>
            <p id={'white-text'}>
                برای تبدیل عکس به نوشته
            </p>
            <div id={'papers'}>
                <Papers id={'paper-image'}/>
            </div>
            <Pattern id={'pattern'}/>
        </div>
    )
}

export default MainSection;
