"use client";

import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
  loadMealIdeas(ingredient);
}, [loadMealIdeas, ingredient]);


  return (
    <section>
      <h2 className="text-lg font-semibold text-[#035718] mb-2 text-center"> {ingredient ? ingredient : "—"} </h2>

      {!ingredient ? (
        <p className="text-gray-500 italic text-center"> Select an ingredient from the Current List </p> 
        ) : meals.length === 0 ? (
        <p className="text-gray-500 italic text-center"> No meal ideas found for "{ingredient}". </p>
        ) : (
        <ul className="divide-y divide-gray-200">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center gap-3 p-2 hover:bg-gray-200 transition">
              <span className="font-medium text-gray-800"> {meal.strMeal} </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
