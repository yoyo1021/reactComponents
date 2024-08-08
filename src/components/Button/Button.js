export default function Button({buttonTxt,disabled,outline,bgColor,onClick}){
    return(
        <button type='button'className={`btn btn${outline?'-outline':''}-${bgColor} `} disabled = {disabled?'disabled':''}
            onClick={onClick}
        >{buttonTxt}</button>
    )
}
