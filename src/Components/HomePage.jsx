import "../Cssfiles/HomePage.css"
import img1 from "../images/TempImages/img1.jpg"
import img2 from "../images/TempImages/img2.jpg"
import img3 from "../images/TempImages/img3.webp"
import img4 from "../images/TempImages/facewash.webp"
import img5 from "../images/TempImages/oil.webp"
import img6 from "../images/TempImages/refine.jpg"
import img7 from "../images/TempImages/surf.jpg"
import img8 from "../images/TempImages/drink.webp"
import { useState } from 'react';

export default function HomePage()
{
    const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
    const [isAdded, setIsAdded] = useState([false, false, false, false, false]);

    const handleAdd = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = 1;
            return newCounts;
        });
        setIsAdded((prevIsAdded) => {
            const newIsAdded = [...prevIsAdded];
            newIsAdded[index] = true;
            return newIsAdded;
        });
    }
    const handleIncrement = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index]++;
            return newCounts;
        });
    }
    const handleDecrement = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] == 0) {
                newCounts[index]--;
            } else {
                setIsAdded((prevIsAdded) => {
                    const newIsAdded = [...prevIsAdded];
                    newIsAdded[index] = false;
                    return newIsAdded;
                });
            }
            return newCounts;
        });
    }
    return (
        <section className="HomePage_main_div">
            <div className="HomePage_scroller_1">
                <div><img src ={img1}/></div>
                <div><img src ={img2}/></div>
                <div><img src ={img3}/></div>
            </div>
            <div className="HomePage_items_list_top">
                <h1>Top Deals on Groceries</h1>
                <div className="HomePage_items_list_collage collage">
                    {
                        [img4, img5, img6, img7, img8].map((img, index) => (
                            <div className="Items_Inc_Dec" key={index}>
                                <img src={img} />
                                {
                                    isAdded[index] ? (
                                        <div className="Adding_after_clicking">
                                            <div className="Adding_buttons_1">
                                                <button className="Adding_to_cart_dec" onClick={() => handleDecrement(index)}>-</button>
                                            </div>
                                            <span className="Displaying_count">{counts[index]}</span>
                                            <div className="Adding_buttons_2">
                                                <button className="Adding_to_cart_inc" onClick={() => handleIncrement(index)}>+</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button className="Adding_to_cart" onClick={() => handleAdd(index)}>Add</button>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}