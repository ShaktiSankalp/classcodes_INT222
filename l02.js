//encoding data to json format

const dataObject = {
    name: "Jhon",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(dataObject);
console.log(jsonString);


//decoding from json to js Object

const jsonString1 = '{"name": "jhon" , "age": 30, "city": "New York"}';

const dataObject1 = JSON.parse(jsonString1);
console.log(dataObject1);

