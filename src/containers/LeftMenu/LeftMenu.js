import LMenuButton from "../../components/LMenuButton/LMenuButton";
import LMenuLogo from "../../components/LMenuLogo/LMenuLogo";

const LeftMenu = () => {
    return (
        <div className='leftMenu'>
            <LMenuLogo />
            <LMenuButton />
            <LMenuButton />
            <LMenuButton />
            <LMenuButton />
        </div>
    )
}

export default LeftMenu;