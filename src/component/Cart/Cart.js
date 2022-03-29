import Modal from "../UI/Modal/Modal"



export default function Cart(props){
    return (
        <Modal onClose={props.onClose}>
            <div>hello</div>
            <div>Hello</div>
            <div>Hello </div>
            <div>
            <button onClick={props.onClose}>Close</button>
            <butto>Order</butto>
            </div>
        </Modal>

    )
}