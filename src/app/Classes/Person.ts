import {Random} from './Random';

export class Person {

    static NAME_LENGTH = 8;
    static MIN_AGE = 0;
    static MAX_AGE = 120;
    static MIN_WEIGHT = 40;
    static MAX_WEIGHT = 100;
    static MARRIED_PROBABILITY = 0.9;
    static MARRIED_MIN_AGE = 18;
    static fieldsDescriptor = {
      id: {title: 'id', type: 'STRING', filtered: false, sorted: false, editable: false, format: x => x },
      name: {title: 'Name', type: 'STRING', filtered: true, sorted: true, editable: true, format: x => x },
      age: {title: 'Age', type: 'NUMBER', filtered: true, sorted: true, editable: true, format: x => x },
      weight: {title: 'Weight', type: 'NUMBER', filtered: true, sorted: true, editable: true, format: x => x.toFixed(1) },
      married: {title: 'Married', type: 'BOOLEAN',  filtered: true, sorted: true, editable: true, format: x => x ? 'yes' : 'no' }
    }

    readonly id: number;
    name: string;
    age: number;
    weight: number;
    married: boolean;

    constructor(id: number, name: string, age: number, weight: number, married: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.married = married;
    }

    static randomPerson(id: number = 0): Person {
        const randomAge = Random.intInRange(Person.MIN_AGE, Person.MAX_AGE);
        return new Person(id,
                          Random.randomName(Person.NAME_LENGTH),
                          randomAge,
                          Random.floatInRange(Person.MIN_WEIGHT, Person.MAX_WEIGHT),
                         (randomAge > Person.MARRIED_MIN_AGE ) && Random.randomBoolean(Person.MARRIED_PROBABILITY));
    }

    static randomArray(size: number): Array<Person> {
        const res = [];
        for (let i = 0; i < size; i++) { res.push(Person.randomPerson(i + 1)); }
        return res;
    }

    toString(): string {
        return 'id: ' + this.id + '; ' +
               'name: ' + this.name + '; ' +
               'age: ' + this.age + '; ' +
               'weight: ' + (this.weight).toFixed(1) + '; ' +
               'married: ' + (this.married ? 'yes' : 'no');
    }
}
