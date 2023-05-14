import { useNavigate } from "react-router-dom"
import { BiError } from 'react-icons/bi';

function Unsuccessful() {

    const navigate = useNavigate();

    return (
        <>
        <div className="columns">
            <div class="column is-4">
            </div>

            <div class="column is-4">
                <div className="box">
                    <div className="content">
                        <h1 class="has-text-danger"><BiError /> Uh oh!</h1>
                        <p>The username or password you entered are incorrect.</p>
                        <p>Click 'Go back' to try again.</p>
                        <button onClick={() => navigate(`/`)} className="button is-medium is-fullwidth is-primary">Go back</button>
                    </div>            
                </div>
            </div>

            <div class="column is-4">
            </div>

        </div>

    </>
        
    )
}

export default Unsuccessful;