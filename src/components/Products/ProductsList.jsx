import styles from './style.css';
import ProductsListItem from './ProductsListItem';

export default function ProductsList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <ProductsListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );
  return (
    <main className={styles.ProductsList}>
      {items}
    </main>
  );
}