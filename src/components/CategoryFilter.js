import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} 
                name={category} 
                onClick={()=> setSelectedCategory(category)}
                className={selectedCategory === category ? "selected" : ""}
                >
        {selectedCategory === category ? category : category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
