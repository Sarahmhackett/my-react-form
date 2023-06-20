import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { MdWavingHand } from 'react-icons/md';

function MyForm () {
  /* ******** THE COMPUTING ********* */
  // handleChange(): Gets 'name'/'value' from inputs -> 'setInputs' updates state to them.
  // handleSubmit(): If statement to decide what to do with the information in the state on submit
  // userNavigate(): To direct to the appropiate message (https://reactrouter.com/en/main/hooks/use-navigate) 
  
    const requiredUsername = "username"
    const requiredPassword = "password"

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

     const handleSubmit = (event) => {
        event.preventDefault();
       
        if (inputs.username === requiredUsername && inputs.password === requiredPassword) {
            console.log("Yay")
            navigate("/successful");    
        } else {
            console.log("Error")
            navigate("/unsuccessful");
        };
    }

    
  return (
    // FORM:: https://www.w3schools.com/react/react_forms.asp 
    // Notes: 'value={inputs.} written like this for two inputs
    // notes: it is passed to state 'inputs' / 'setInputs' on change when submitted
    // CSS LIBRARY: https://bulma.io/documentation/form/general/
    
    <>
    
        <div className="box">

            <div className="content">
            <h1> <MdWavingHand /> Hello there</h1>
            <p>This is my first React form using things like useState(), Routing and useNavigate().
            It also uses the Bulma.io CSS library and React Icons only for styling.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="control">
                    <label className="label">Username:                
                    <input 
                        className="input mt-2"
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                    /> 
                        <p className="mt-1 has-text-weight-light is-size-7">(Hint: try "username")</p>
                    </label>    

                    <label className="label">Password:
                        <input 
                            className="input mt-2"
                            type="text" 
                            name="password" 
                            value={inputs.password || ""} 
                            onChange={handleChange}
                        />
                        <p className="mt-1 has-text-weight-light is-size-7">(Hint: try "password")</p>
                    </label>

                    <input type="submit" className="mt-4 button is-medium is-fullwidth is-primary" />
                </div> 
            </form>

        </div>

    </>
  )
}

export default MyForm;
