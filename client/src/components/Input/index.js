import React from "react"
import {InputGroup,FormControl} from "react-bootstrap"
function Textbox(props){
    return(
        <InputGroup className="mb-3">
         
        <FormControl aria-describedby="basic-addon1" onChange={props.handleInputChange} />
      </InputGroup>
    
    )
}
export default Textbox