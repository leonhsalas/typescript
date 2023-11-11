(()=>{
    let isSuperman:boolean = true;
    let isBatman:boolean = false;
    let isIronman:boolean = false;

    isSuperman = true && false;
    isBatman = true && true;

    isIronman = ( isSuperman ) ? true: false;
    
    console.log({ isSuperman })
    console.log({ isBatman })
    console.log({ isIronman })
})()