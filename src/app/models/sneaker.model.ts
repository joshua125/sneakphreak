
export class sneaker {
    id: string;
    private name: string;
    private price: number;
    private image: string;
    // private previousOwners: string[];
    // private hype: string;

    constructor( name: string, price: number, image: string){
        this.id = null;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getOwners(){
        // return this.previousOwners.slice();
    }

    getImage(){
        return this.image;
    }
}