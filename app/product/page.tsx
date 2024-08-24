import AboutComponent from "../../components/about-component";
import ProductComponent from "../../components/product-component";
import styles from "../../styles/Home.module.css";

export default function Product() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ProductComponent />
      </main>
    </div>
  );
}
