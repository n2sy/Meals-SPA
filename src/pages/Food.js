import { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import Meals from "./Meals";



export default function Food(props) {
    const [openModal, setOpenModal] = useState(false);

    function onClose() {
        setOpenModal(false);
    }

    function onOpen() {
        setOpenModal(true);
    }

    return (
        <div className="container">
            {openModal && <Cart onOpen={onOpen} onClose={onClose}></Cart>}
            <Header onOpen={onOpen}></Header>
            <main>
                <Meals></Meals>
            </main>
        </div>

    )
}