import './Button.css'

export default function Button(props) {
    let name = props.name
    return(
        <>
        <button className='btn'>{name}</button>
        </>
    )
};
 