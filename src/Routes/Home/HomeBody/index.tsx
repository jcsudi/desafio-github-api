import { Link } from 'react-router-dom';
import './styles.css';

export default function HomeBody() {

    return(
        <main>
            <section className='header-container'>
                <div className="informative">
                    <h2>Desafio Github API</h2>
                    <p>DevSuperior - Escola de programação</p>
                </div>
                <Link to="/before">
                    <button>Começar</button>
                </Link>
                
            </section>       
        </main>

    );
}