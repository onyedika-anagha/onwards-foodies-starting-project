import { meals } from "@/utils/data";
import Link from "next/link";

function MealItem({ item = meals[1] }) {
    return (
        <div style={styles.container}>
            <div style={{ ...styles.container, ...styles.top }}>
                <Link href={`/meals/${item.slug}`}>
                    <img
                        style={styles.img}
                        src="/images/pizza.jpg"
                        alt={item.name}
                    />
                </Link>

                <Link href={`/meals/${item.slug}`}>{item.name}</Link>
            </div>
            <div>
                <span>${item.price}</span>
                <span>${item.calories}</span>
            </div>
        </div >
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        width: '12rem',
        height: '12rem'
    },
    top: {
        gap: '0.75rem'
    }
}

export default MealItem;