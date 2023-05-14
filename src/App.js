import 'bulma/css/bulma.css';
import MyForm from './components/MyForm';

function App() {  
// CSS: Bulma columns to position the form in the middle.
  return(   
  <>
    <div>
      <div class="columns">
        <div class="column is-4">
        </div>
        <div class="column is-4">

          <MyForm />
          
        </div>
        <div class="column is-4">
        </div>
        
      </div>
    </div>
   
 
    
  </>
)
}

export default App;
