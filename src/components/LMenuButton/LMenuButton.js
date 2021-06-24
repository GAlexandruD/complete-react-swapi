import Icons from "../Icons/Icons";
import './LMenuButton.css'
//  car
//  film
//  globe
//  home
//  pastafarianism
//  spaceshuttle
//  users

const LMenuButton = () => {
    return (
        <li className='leftmenubutton'>
            <img className='white' src={Icons.home} alt='car logo'></img>
            <p className="item">Home</p> 
        </li>
    )
}

export default LMenuButton;