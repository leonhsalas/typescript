(()=>{
    let avengers: number = 7;
    console.log( avengers )
    const villains: number = 20;

    if( avengers < villains ) {
        console.log("estamos en problemas");
    }else{
        console.log("Estamos salvados");
    }

    avengers = Number('55A');

    console.log({ avengers });
})()