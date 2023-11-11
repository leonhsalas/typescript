(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string,string] = [batman,superman];
    const villano: [string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string [] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerza {
      aquaman = 0,
      flash = 5,
      batman = 1,
      superman = 100
    }
    const fuerzaFlash: number =  fuerza.flash;
    const fuerzaSuperman: number = fuerza.superman;
    const fuerzaBatman: number = fuerza.batman;
    const fuerzaAquaman: number = fuerza.aquaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: string = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder as number );
  
  
  })()
  
  