import classes from "./loading.module.css";
export default function MealsLoadingPage() {
  return (
    <div className={classes["loading-container"]}>
      {" "}
      <p className={classes.loading}>Fetching meals...</p>
    </div>
  );
}
