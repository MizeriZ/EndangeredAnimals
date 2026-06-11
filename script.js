const grid = document.getElementById("animalGrid");

function renderAnimals(type = "all") {

    grid.innerHTML = "";

    let filtered = animals;

    if (type !== "all") {
        filtered = animals.filter(
            animal => animal.grade === type
        );
    }

    filtered.forEach(animal => {

        grid.innerHTML += `
            <div class="animal-card ${animal.grade}">

                <div class="animal-info">

                    <img src="${animal.image}" alt="${animal.name}">

                    <h3>${animal.name}</h3>

                    <p>${animal.desc}</p>

                    <span class="${
                        animal.grade === "grade1"
                        ? "danger"
                        : "warning"
                    }">
                        ${
                            animal.grade === "grade1"
                            ? "멸종위기 1급"
                            : "멸종위기 2급"
                        }
                    </span>

                </div>

            </div>
        `;

    });

}

function filterAnimals(type) {
    renderAnimals(type);
}

renderAnimals();