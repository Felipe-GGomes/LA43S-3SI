import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faMessage} from '@fortawesome/free-solid-svg-icons';
import './Header.css'

export function Header(){
    return(
        <header className='topbar'>
            <div className="search-box">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="search" placeholder='Pesquisar'/>
            </div>
            <div className='topbar-actions'>
                <button>
                    <FontAwesomeIcon icon={faMessage}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faMessage}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faMessage}/>
                </button>
            </div>

        </header>
    )
}