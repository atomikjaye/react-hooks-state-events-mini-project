import React from "react";

function CategoryFilter({ categories, categoryList, setCategoryList }) {
  console.log("Categories", categories)
  console.log("CategoryList", categoryList)
  const listCategories = categories.map((category) => {
    return (
      <button
        key={category}
        className={categoryList === category ? 'selected' : null}
        onClick={() => setCategoryList(category)}>
        {category}
      </button>
    )
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listCategories}
    </div>
  );
}

export default CategoryFilter;
