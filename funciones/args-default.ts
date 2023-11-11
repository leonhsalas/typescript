(() => {

    const fullName = ( firstname?:string, lastname?:string, upper: boolean = false ): string => {
        if ( upper ) {
            return  `${ firstname } ${ lastname }`.toUpperCase();
        } else {
            return  `${ firstname } ${ lastname }`
        }
    }

    let noName: string;

    const name = fullName( 'Tony', 'Stark', true  );

    console.log({ name });
})()