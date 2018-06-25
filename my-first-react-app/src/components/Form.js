import React, { Component } from 'react'


class Form extends Component {
    render (){
        return(
            <form>
               <div class="flex-form"> 
                <p>
                First Name:
                <input className="input1" 
                type="text" name="name" 
                placeholder="First Name"/>
                Last Name:
                <input className="input1"
                 type="text" name="name" 
                 placeholder="Last Name"/>
                 Feedback:
                <textarea name="comment" className="text"/>
                
               <footer className="App"/></p>
            </div>
         </form>  
        )
    }
}

export default Form