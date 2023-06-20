import success from '../img/success.png';
import { useNavigate } from "react-router-dom";
import { TiTick } from 'react-icons/ti';


function Successful() {
//Assign and call useNavigate() function here. 
// On click the variable 'navigate' is called which triggers it.
    const navigate = useNavigate();

    return(
        <div className="columns">
            <div class="column is-4">
            </div>

            <div class="column is-4">
                <div className="box">
                    <div className="content">
                        <h1 class="has-text-success-dark"><TiTick/> Woo hoo!</h1>
                        
                        <img src={success} alt="Homer Simpson Success" width="300px" className="mt-4"/>
                        
                        
                        <p className="mt-4">Welcome! Your sign in was successful. Click 'Go back' to log out</p>
                        <button onClick={() => navigate(`/`)} className="button is-medium is-fullwidth is-primary">Go back</button>
                    </div>            
                </div>
            </div>

            <div class="column is-4">
            </div>

        </div>
    )
}

export default Successful;