export const getMealMetaData = (meal, previousImages) => {
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: meal.title,
    icons: {
      icon: [
        { url: meal.image },
        { url: meal.image, media: "(prefers-color-scheme: dark)" },
      ],
      shortcut: [meal.image],
      apple: [
        { url: meal.image },
        { url: meal.image, sizes: "180x180", type: "image/png" },
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
  };
};
