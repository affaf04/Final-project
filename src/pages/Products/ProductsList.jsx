import styles from './MenuList.module.css';
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
    <main className={styles.MenuList}>
      {items}
    </main>
  );
}