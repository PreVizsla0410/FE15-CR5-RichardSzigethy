class Animal {
    name: string;
    gender: string;
    size: string;
    age: number;
    vaccine: boolean;
    img: string;
    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: string) {
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.img = img;
    }
    displayCard() {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="cart-title">Name: ${this.name}</h5>
         <h6 class="cart-title">Sex: ${this.gender}</h6>
         <h6 class="cart-title">Age: ${this.age}</h6>
         <h6 class="cart-title">Size: ${this.size}</h6>
         <h4 class="vaccine ${this.vaccine ? 'yes':'no'}">${this.vaccine ? 'vaccinated':'not vaccinated'}</h4> 
        </div>
      </div>
      </div>
      `
    }
}

class Cat extends Animal {
    breed: string;
    furColor: string;
    breedInfo: string;
    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: string, breed: string, furColor: string, breedInfo: string) {
        super(name, gender, age, size, vaccine, img)
        this.breed = breed;
        this.furColor = furColor;
        this.breedInfo = breedInfo;
    }
    displayCard() {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="cart-title">Name: ${this.name}</h5>
         <h6 class="cart-title">Sex: ${this.gender}</h6>
         <h6 class="cart-title">Age: ${this.age}</h6>
         <h6 class="cart-title">Size: ${this.size}</h6>
         <h4 class="vaccine ${this.vaccine ? 'yes':'no'}">${this.vaccine ? 'vaccinated':'not vaccinated'}</h4> 
         <h6 class="cart-title">Breed: ${this.breed}</h6>
         <h6 class="cart-title">Color: ${this.furColor}</h6>
         <h6 class="cart-title">Info: ${this.breedInfo}</h6>
        </div>
      </div>
      </div>
      `
    }
}

class Dog extends Animal {
    breed: string;
    training: boolean;
    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: string, breed: string, training: boolean) {
        super(name, gender, age, size, vaccine, img)
        this.breed = breed;
        this.training = training;
    }
    displayCard() {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="cart-title">Name: ${this.name}</h5>
         <h6 class="cart-title">Sex: ${this.gender}</h6>
         <h6 class="cart-title">Age: ${this.age}</h6>
         <h6 class="cart-title">Size: ${this.size}</h6>
         <h4 class="vaccine ${this.vaccine ? 'yes':'no'}">${this.vaccine ? 'vaccinated':'not vaccinated'}</h4> 
         <h6 class="cart-title">Breed: ${this.breed}</h6>
         <h6 class="training ${this.training ? 'yes': 'no'}">${this.training ? 'has training':'not trained'}</h6>
        </div>
      </div>
      </div>
      `
    }


}



let animal1 = new Animal("JibJab", "male", 4, "XLL", true, "https://www.kindernetz.de/wissen/tierlexikon/1604501269174,steckbrief-gecko-102~_v-23x10@2dS_-2cf5d090911496bff62e0e028123b0aafb29d4ff.jpg");
let animal2 = new Animal("Bacon", "male", 12, "XLL", true, "data:image/jpeg;base64,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");

let animal3 = new Cat("Big Pussy", "male", 6, "XLL", false, "https://image.stern.de/7361112/t/zs/v3/w1440/r1/-/garfield.jpg", "Scottish Fold", "Yellow", "https://www.tieranwalt.at/Aktuelles/Scottish-Fold.htm");
let animal4 = new Cat("Kitty", "female", 2, "XLL", false, "https://www.josera.de/media/wysiwyg/ratgeber-de/ratgeber-katze/katzen-richtig-erziehen/katze-a_rgerlich.jpg", "Scottish Fold", "black", "https://de.wikipedia.org/wiki/Hauskatze");

let animal5 = new Dog("Bento", "male", 10, "XLL", true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUjW9j8ZRlMvVE2OYzHlF1bm7e2BE4aREhA&usqp=CAU", "Golden Retriever", true)
let animal6 = new Dog("Kira", "gemale", 18, "XLL", true, "https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200", "Rottweiler", false);



const animals: Array < Animal > = [animal1, animal2, animal3, animal4, animal5, animal6];

animals.forEach((val) => {
    document.getElementById("row").innerHTML += val.displayCard();
});
