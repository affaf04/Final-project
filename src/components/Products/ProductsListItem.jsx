import './style.css';

export default function ProductsListItem({ menuItem, handleAddToOrder }) {
    return (
  <div className='MenuListItem'>
        <div >     
            <img className='img 'src={menuItem.img} alt={menuItem.name} />
</div>
        <div className='name'>{menuItem.name}</div>
        <div className='buy'>
          <span>${menuItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
            ADD
          </button>
        </div>
      </div>
    );
  }