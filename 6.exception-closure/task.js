function parseCount(number) {

    let count = Number.parseInt(number);

    if (isNaN(count) === true) {
        throw new Error("Невалидное значение");
    }
    return count;
}


function validateCount(number) {

    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((((a + b) < c) || ((b + c) < a) || ((c + a) < b))) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {

        return this.a + this.b + this.c;
    }

    getArea() {
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let p = this.getPerimeter() / 2;
        let resultArea = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
        
        return + resultArea;
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует",
        }
    }
}



