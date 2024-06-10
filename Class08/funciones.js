class CZooAnimal {
    constructor(idAnimal, name, cageNumber, idTypeAnimal, weight) {
        this.idAnimal = idAnimal;
        this.name = name;
        this.cageNumber = cageNumber;
        this.idTypeAnimal = idTypeAnimal;
        this.weight = weight;
    }
}


let zooAnimals = [];


zooAnimals.push(new CZooAnimal(1, "León", 2, 1, 190));
zooAnimals.push(new CZooAnimal(2, "Tigre", 3, 1, 220));
zooAnimals.push(new CZooAnimal(3, "Loro", 5, 2, 1.5));
zooAnimals.push(new CZooAnimal(4, "Serpiente", 5, 3, 5));
zooAnimals.push(new CZooAnimal(5, "Gato Montés", 4, 1, 50));

// b. Mostrar la cantidad de animales de la Jaula 5 cuyo peso sea menor a 3 kg.
function pesoMenor() {
    return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

// c. Listar cantidad de animales de tipo felinos que están entre las jaulas 2 a 5.
function felinos() {
    return zooAnimals.filter(animal => animal.idTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
}

// d. Listar el nombre del animal de la Jaula 4 cuyo peso sea menor a 120.
function PesoMenor120() {
    let animal = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
    return animal ? animal.name : "No hay animales";
}

        // Mostrar resultados
        document.write("<p>Cantidad de animales en la Jaula 5 con peso menor a 3 kg: " + pesoMenor() + "</p>");
        document.write("<p>Cantidad de felinos en las jaulas 2 a 5: " + felinos() + "</p>");
        document.write("<p>Nombre del animal en la Jaula 4 con peso menor a 120 kg: " + PesoMenor120() + "</p>");

        // Mostrar zooAnimals en una tabla
        document.write("<table>");
        document.write("<tr><th>ID</th><th>Nombre</th><th>Jaula</th><th>Tipo</th><th>Peso</th></tr>");
        zooAnimals.forEach(animal => {
            document.write("<tr>");
            document.write("<td>" + animal.idAnimal + "</td>");
            document.write("<td>" + animal.name + "</td>");
            document.write("<td>" + animal.cageNumber + "</td>");
            document.write("<td>" + animal.idTypeAnimal + "</td>");
            document.write("<td>" + animal.weight + "</td>");
            document.write("</tr>");
        });
        document.write("</table>");
