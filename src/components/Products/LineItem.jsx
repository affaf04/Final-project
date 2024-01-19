import "./style.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <img src={lineItem.item.img} alt={lineItem.item.name} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'spaceBetween',

        }}
      >
        <span className="products-info">{lineItem.item.name}</span>
        <span className="products-info"> {lineItem.item.price.toFixed(2)}</span>
      </div>
      <div className=".qty" >
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
            
          >
            -
          </button>
        )}
        <span>{lineItem.qty}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
      <div className="extPrice">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}