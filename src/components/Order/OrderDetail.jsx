import './orderstyles.css';
import LineItem from '../Products/LineItem';
// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );

    return (
      <div className='OrderDetail'>
        <div className='sectionHeading'>
          {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span>NEW ORDER</span>
          }
          <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className='lineItemContainer' style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll', alignItems: 'center', justifyContent: 'center' }} >
          {lineItems.length ?
            <>
              {lineItems}
              <section className='total'>
                {order.isPaid ?
                  <span className='right'>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleCheckout}
                    disabled={!lineItems.length}
                  >CHECKOUT</button>
                }
                <span>{order.totalQty}</span>
                <span className='right'>${order.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className=''></div>
          }
        </div>
      </div>
    );
  }