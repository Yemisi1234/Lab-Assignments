(async () => {
  try {
    let api = await fetch("https://dummyjson.com/recipe");
    let result = await api.json();
    const data = result.recipes;
    data.map((res) => {
      console.log(res.name);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
})();
