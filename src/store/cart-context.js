import { createContext, useState } from "react";



const CartContext = createContext(
    {
        items: [],
        addItem: () => { },
        removeItem: () => { },
        totalAmount: 0

    }
)


export function CartContextProvider(props) {

    const [items, setItems] = useState([]);

    function addItem(newItem) {
        console.log("DANS ADD");
        //let selItem = items.find((i) => i.id == newItem.id);
        // console.log(selItem);
        setItems((prev) => {

            let i = items.findIndex((elt) => elt.id == newItem.id)
            if (i != -1) {

                let newPrev = [...prev];
                newPrev[i].qte = newPrev[i].qte + newItem.qte;
                // newPrev[i] = { ...newPrev[i], qte: newPrev[i].qte + newItem.qte };



                return newPrev;
            }
            else {


                let i = {
                    id: newItem.id,
                    name: newItem.name,
                    prix: newItem.prix,
                    qte: newItem.qte,
                }
                //prev.push(i);
                console.log([...prev, i]);
                return [...prev, i];
            }

        })
        //console.log('+++++++', items);
    }

    function removeItem(newItem) {
        let selItem = items.find((i) => i.id == newItem.id);
        if (selItem.qte > 1) {
            selItem.qte -= newItem.qte;
        }
        else {

            setItems(prev => {
                let i = prev.indexOf(selItem);
                prev.slice(i);
                return [...prev];
            })
        }
    }

    function computeTotalAmount() {
        const cmd = items.map((i) => { return (i.prix * i.qte) });
        // console.log(cmd);
        return cmd.reduce((prev, curr) => {
            return prev + curr
        }, 0);
    }


    const context = {
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        totalAmount: computeTotalAmount

    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;