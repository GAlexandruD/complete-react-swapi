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
        <div className='leftmenubutton'>
            <img className='white' src={Icons.home} alt='car logo'></img>
            <p className="item">Home</p> 
        </div>
    )
}

export default LMenuButton;