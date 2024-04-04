import { getMeals } from "@/lib/meals";

export async function generateMetadata(
    { params, searchParams },
    parent
) {
    // read route params
    const slug = params.slug

    // fetch data
    const meals = await getMeals(),
        meal = meals.find(i => i.slug === slug)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: meal.title, icons: {
            icon: [
                { url: meal.image },
                { url: meal.image, media: '(prefers-color-scheme: dark)' },
            ],
            shortcut: [meal.image],
            apple: [
                { url: meal.image },
                { url: meal.image, sizes: '180x180', type: 'image/png' },
            ],
            other: [
                {
                    rel: meal.image,
                    url: meal.image,
                },
            ],
        },
        openGraph: {
            images: [meal.image, ...previousImages],
        },
    }
}

function MealDetails({ params }) {
    return (<main>
        <h2>{params.slug}</h2>
    </main>);
}

export default MealDetails;