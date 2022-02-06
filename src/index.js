import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
import './index.css';

ReactDom.render(<App></App>, document.getElementById('root'));

/* class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and I am', this.age, 'years old');
    }
}

const animal1 = new Animal('Amma', 32);
animal1.speak();

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log('Roooar! I have', this.furColor, 'fur, and I can run', this.speed, 'miles per hour')
    }
    
       
}

const lion1 = new Lion('Akka', 17, 'Yellow', 6);
lion1.speak();
lion1.roar(); */

//console.log(lion1);