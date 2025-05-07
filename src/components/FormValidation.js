import { use, useState } from "react";

function FormVaidation(){
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError]  = useState(null);
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(event.target.value);
        if(value.length < 5){
            setInputError("Input Must be at least 5 Characters");
        }
        else{
            setInputError(null);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(inputValue.length >= 5){

        }
        else{
            setInputError("Input Must bee 5 Characters");
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Fruit:
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            </label>
            <button type="submit">Submit</button>
            {inputValue && <div style={{color:'red'}}>{inputError}</div>}
        </form>
    )
}

export default FormVaidation;