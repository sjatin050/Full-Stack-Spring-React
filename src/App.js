import './App.css';
import Counter from './components/counter/Counter';

// to use other then default function use {} braces as used in FifthComponent above

// in below function do not pass -> by="1" ,, else pass by={1}
function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

// Dealing with how to pass parameters to function

// Way : 1
// function PlayingWithProps(properties){
//   console.log(properties)
//   return (
//     <div>Props</div>
//   )
// }


// Way : 2
// function PlayingWithProps({property1,property2}){
//     console.log(property1)
//     console.log(property2)
//     return (
//       <div>Props</div>
//     )
//   }

// Parentheses () make returning complex JSX values easier

//Custom Components should start with upper case letter { FirstComponent() }, 
// For HTML you should use small case { <div></div> }

// Specify CSS class - className , Similar to HTML class attribute


export default App;

