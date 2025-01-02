import { useEffect, useState } from "react";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(res => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])

    return (
        <section>
            <h2>....</h2>
        </section>
        // <section></section>
         
    );
};

export default PopularMenu;