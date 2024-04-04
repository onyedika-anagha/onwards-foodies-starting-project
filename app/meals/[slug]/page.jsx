import { getMeal } from "@/lib/meals";
import classes from './page.module.css';
import { getMealMetaData } from "@/utils/helper-functions";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata(
    { params, searchParams },
    parent
) {
    // read route params
    const slug = params.slug

    // fetch data
    const meal = await getMeal(slug)
    if (!meal) {
        return {
            title: "Error 404, Meals not found."
        };
    }
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return getMealMetaData(meal, previousImages)
}

function MealDetails({ params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    return (<>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </main>
    </>);
}

export default MealDetails;