import "../Cssfiles/CartPage.css"
export default function CartandOrders()
{
    return(
        // <h1>Hello Pamelo this my Cart</h1>
        <section className="CartMain_section">
            <div className="Cart_div1_items">
                <div className="Cart_div1_items_Tab">
                    <div className="Cart_div1_items_Tab1_h1">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="Cart_div1_items_Tab1_span">
                        <span>Prices</span>
                    </div>

                </div>
                <hr/>
                <div className="Cart_div1_contents">
                    <div className="Cart_div1_contents_img">x</div>
                    <div className="Cart_div1_descriptions">y</div>
                    <div className="Cart_div1_pricing">z</div>
                </div>
            </div>
            <div className="Cart_div2_checking">
            </div>
        </section>
    );
}