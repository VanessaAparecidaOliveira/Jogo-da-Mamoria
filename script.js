
const input = document. querySelector ('.login_input');
const button = document. querySelector ('.login_button');
const form = document.querySelector('login-form');

const validadeInput = ({target}) => {
   if ( target.value.length >2){
    button.removeAttribute ('disabled');
   }
}

const  handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = "./pages/gamer.html";
    
 
}
input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);




