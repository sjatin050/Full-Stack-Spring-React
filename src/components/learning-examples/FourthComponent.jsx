import { Component } from 'react';

export default class FourthComponent extends Component{

    render(){
      return (
        //There should be parent tags -> like in this case is div .
        // if i remove it then both internal div will give error
        <>
         <div>  
          <div className="FourthComponent">Fourth Component</div>
          <div className="FourthComponent">Fourth Component</div>
        </div>
        </>
        
      )
    }
  }
  