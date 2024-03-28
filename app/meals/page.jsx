import MealItem from "@/components/meals/meal-item.component";
import { meals } from "@/utils/data";
import Link from "next/link";

function MealsPage() {
    return (<main>
        <h2>View Our Meals</h2>
        <Link href={'/meals/share'}>Go to share</Link>
        <div style={styles.mealsContainer}>
            {meals.map((item) => <MealItem key={item.id} item={item} />)}
        </div>
    </main>);
}

const styles = {
    mealsContainer: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        marginLeft: '1.75rem'
    }
}

export default MealsPage;