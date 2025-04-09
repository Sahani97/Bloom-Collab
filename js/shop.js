document.addEventListener("DOMContentLoaded", function () {
    const plants = [
        { name: "Aloe Vera", price: 12.99, category: "beginner", image: "assets/images/plants/beginner/Aloe_Vera.jpg" },
        { name: "Peace Lily", price: 18.98, category: "beginner", image: "assets/images/plants/beginner/Peace_Lily.jpg" },
        { name: "Snake Plant", price: 15.99, category: "beginner", image: "assets/images/plants/beginner/Snake_Plant.jpg" },
        { name: "ZZ Plant", price: 35.90, category: "beginner", image: "assets/images/plants/beginner/ZZ_plant.jpg" },
        { name: "Cactus", price: 9.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/Cactus.jpg" },
        { name: "Pothos", price: 14.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/Pothos.jpg" },
        { name: "Rubber Plant", price: 24.50, category: "droughtresistant", image: "assets/images/plants/droughtresistant/Rubber_Plant.jpg" },
        { name: "Succulent", price: 10.99, category: "droughtresistant", image: "assets/images/plants/droughtresistant/Succulent.jpg" },
        { name: "Anthurium", price: 22.99, category: "longlasting", image: "assets/images/plants/longlasting/Anthurium.jpg" },
        { name: "Carnation", price: 19.99, category: "longlasting", image: "assets/images/plants/longlasting/Carnation.jpg" },
        { name: "Chrysanthemum", price: 20.50, category: "longlasting", image: "assets/images/plants/longlasting/Chrysanthemum.jpg" },
        { name: "Orchid", price: 29.99, category: "longlasting", image: "assets/images/plants/longlasting/Orchid.jpg" },
        { name: "Calathea", price: 17.49, category: "lowlight", image: "assets/images/plants/lowlight/Calathea.jpg" },
        { name: "Cast Iron Plant", price: 21.99, category: "lowlight", image: "assets/images/plants/lowlight/Cast_Iron_Plant.jpg" },
        { name: "Chinese Evergreen", price: 18.50, category: "lowlight", image: "assets/images/plants/lowlight/Chinese_Evergreen.jpg" },
        { name: "Pothos", price: 14.99, category: "lowlight", image: "assets/images/plants/lowlight/Pothos.jpg" },
      ];
      
      const shopGrid = document.getElementById("shopItems");
      const categoryFilter = document.getElementById("categoryFilter");
      const sortFilter = document.getElementById("sortFilter");
      
      function renderPlants(plantsToRender) {
        shopGrid.innerHTML = "";
        plantsToRender.forEach((plant) => {
          const card = document.createElement("div");
          card.className = "plant-card";
          card.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" />
            <div class="plant-info">
              <h3>${plant.name}</h3>
              <p>€${plant.price.toFixed(2)}</p>
              <button class="add-to-cart" onclick="showToast('${plant.name} which costs €${plant.price.toFixed(2)} added to cart!')">Add to Cart</button>
            </div>
          `;
          shopGrid.appendChild(card);
        });
      }
      
      function applyFilters() {
        let filteredPlants = [...plants];
        const category = categoryFilter.querySelector("button.active").dataset.category;
        const sort = sortFilter.value;
      
        if (category !== "all") {
          filteredPlants = filteredPlants.filter((plant) => plant.category.includes(category));
        }
      
        if (sort === "lowtohigh") {
          filteredPlants.sort((a, b) => a.price - b.price);
        } else if (sort === "hightolow") {
          filteredPlants.sort((a, b) => b.price - a.price);
        }
      
        renderPlants(filteredPlants);
      }

      function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.add("show");
      
        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000); // Toast disappears after 3 seconds
      }
      
      
      
      // Handle category filter buttons
    categoryFilter.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryFilter.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        // Add active class to the clicked one
        btn.classList.add("active");
        applyFilters();
        });
    });
  
      sortFilter.addEventListener("change", applyFilters);
      
      // Initial load
      renderPlants(plants);
      window.showToast = showToast;

});