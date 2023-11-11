(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }


    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: [1,2],
        getName() {
            return this.name
        }
    }
    
    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name
        }
    }
})()