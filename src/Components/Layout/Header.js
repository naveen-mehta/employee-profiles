import Typed from 'react-typed';
import '../../Stylesheets/header.css';

const Header = () => {
    return (
        <header>
            <h1 className="header-title">
                Sandpit Team
            </h1>
            <div className='underline'></div>
            <div class="header-subtitle">
                <Typed
                    strings={['Hi there :)', 'My name is Naveen Mehta.', `I'm a Software Engineer based in Melbourne.`, 'Hover on the cards below to see more...', 'Thanks for stopping by!']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop >
                </Typed>
            </div>
        </header>
    )
}

export default Header;