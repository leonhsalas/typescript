(() => {

    const fullName = ( firstname?:string, lastname?:string ): string => {
        return  `${ firstname } ${ lastname }`;
    }

    let noName: string;

    const name = fullName( 'Tony' );

    console.log({ name });
})()