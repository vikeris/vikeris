function setup() {
    createCanvas(600, 400);
    background(240);

    drawCat(100, 150); // Кіт
    drawCar(350, 200); // Машина
    drawHouse(250, 50); // Будинок
}

function drawCat(x, y) {
    push();
    translate(x, y);

    // Тіло кота
    fill(150, 100, 50);
    ellipse(100, 100, 120, 80);

    // Голова кота
    ellipse(100, 50, 80, 80);

    // Вуха
    triangle(70, 20, 90, 0, 100, 20);
    triangle(130, 20, 110, 0, 100, 20);

    // Очі
    fill(255);
    ellipse(85, 50, 15, 25);
    ellipse(115, 50, 15, 25);
    
    fill(0);
    ellipse(85, 50, 8, 15);
    ellipse(115, 50, 8, 15);
    
    // Ніс
    fill(255, 0, 0);
    triangle(95, 65, 105, 65, 100, 75);
    
    // Вуса
    stroke(0);
    line(75, 70, 50, 60);
    line(75, 75, 50, 75);
    line(75, 80, 50, 90);
    
    line(125, 70, 150, 60);
    line(125, 75, 150, 75);
    line(125, 80, 150, 90);

    pop();
}

function drawCar(x, y) {
    push();
    translate(x, y);

    // Колеса
    fill(50);
    ellipse(50, 80, 40, 40);
    ellipse(150, 80, 40, 40);

    // Корпус
    fill(0, 0, 255);
    rect(20, 40, 160, 40, 10);

    // Дах машини
    fill(0, 0, 200);
    rect(40, 10, 120, 30, 5);

    // Вікна
    fill(173, 216, 230);
    rect(50, 15, 40, 25);
    rect(110, 15, 40, 25);

    // Фари
    fill(255, 255, 0);
    ellipse(180, 55, 10, 10);

    pop();
}

function drawHouse(x, y) {
    push();
    translate(x, y);

    // Фундамент будинку
    fill(255, 150, 100);
    rect(50, 100, 120, 100);

    // Дах
    fill(150, 75, 0);
    triangle(40, 100, 180, 100, 110, 50);

    // Двері
    fill(100, 50, 0);
    rect(100, 150, 30, 50);

    // Вікна
    fill(255);
    rect(65, 120, 30, 30);
    rect(135, 120, 30, 30);

    pop();
}