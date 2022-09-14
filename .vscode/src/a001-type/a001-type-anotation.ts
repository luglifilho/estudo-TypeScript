export function multplicArgs( ...args: Array<number>): number{
   return args.reduce((ac, valor) => ac * valor, 1);
   }

   const result = multplicArgs(1, 2, 2)
  console.log(result);

    //tuple

    const dadosCliente: [number, string, number] = [1, 'Daniel', 15];
    const dadosCliente2: readonly [number, string, number] = [1, 'Daniel', 15];

    dadosCliente[0]= 100;

    console.log(dadosCliente);



    export function square(x: any){
        if(typeof x === 'number')
        return x * x;
        return null;
    }

    const squareof = square('ola');


    let a: 100 = 100;
    a = 120;


    