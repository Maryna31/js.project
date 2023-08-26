const variable = +prompt('Enter variable')
if(variable===10) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

const test = true;
if (test) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

const test1 = false;
if (test1) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

const preise = +prompt('Сума покупки');
if (preise > 800) {
    console.log('Сума : ' , preise-((preise*5)/100));
} else if (preise > 500) {
    console.log('Сума : ' , preise-((preise*3)/100));
} else {
    console.log('Сума : ' , preise);
}


let currentNumber = 25;
const TOTAL_NUMBER_AMOUNT = 0;
while (currentNumber>=TOTAL_NUMBER_AMOUNT) {
    console.log(currentNumber);
    currentNumber--;
}

let currentNumberse = 10;
const TOTAL_NUMBERSE_AMOUNT = 50;
while (currentNumberse<=TOTAL_NUMBERSE_AMOUNT) {
    if (currentNumberse%5===0) {
        console.log(currentNumberse);
    }
    currentNumberse++;
}

let sum = 0;
for (let i=0; i<=100; i++) {
    sum+=i;
}
console.log(sum);