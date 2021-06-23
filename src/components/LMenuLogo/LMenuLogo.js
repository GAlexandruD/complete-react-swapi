import StarWarsLogo from './Star_Wars_Logo.svg'

const LMenuLogo = () => {
    return (
        <div className='logo'>
            <img src={StarWarsLogo} alt='StarWars Logo'></img>
            <h3>Universe</h3>            
        </div>
        
    )
}

export default LMenuLogo;