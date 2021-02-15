import Typed from 'react-typed';
import '../../Stylesheets/header.css';

const Header = () => {
    return (
        <header>
            <h1 
                className="header-title"
                data-aos="fade-down" 
                data-aos-duration="2000"
            >
                Sandpit Team
            </h1>
            <div className='underline'></div>
            <div 
                className="header-subtitle"
                data-aos="fade-right" 
                data-aos-delay="500"
                data-aos-duration="1500" 
            >
                <Typed
                    strings={['Hi there :-)', 'My name is Naveen Mehta.', `I'm a Software Engineer based in Melbourne.`, 'Hover on the cards below to see more...', 'Thanks for stopping by :)']}
                    typeSpeed={41}
                    backSpeed={45}
                    loop
                >
                </Typed>
            </div>
        </header>
    )
}

export default Header;