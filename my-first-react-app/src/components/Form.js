import React, { Component } from 'react'


class Form extends Component {
    render (){
        return(
            <form>
               <fieldset class="field">
               <div class="flex-form"> 
                
                First Name:
                <input class="input1" 
                type="text" name="name" 
                placeholder="First Name"/>
                Last Name:
                <input class="input1"
                 type="text" name="name" 
                 placeholder="Last Name"/>
                
                Feedback:
                <textarea name="comment" class="text"/>
                </div>
                </fieldset>
            </form>
        )
    }
}

export default Form