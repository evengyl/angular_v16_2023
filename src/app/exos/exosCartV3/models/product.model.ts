export class product{
    id : number
    name : string
    price : number
}

/**
 * crée un mokup de donnée sur base du model product
 * @returns Un tableau de produit fictif
 */
export function fillMokup() : product[]
{

    let listProd : product[] = []

    listProd.push({id : 1, name : "product 1", price : 42})
    listProd.push({id : 2, name : "product 2", price : 15})
    listProd.push({id : 3, name : "product 3", price : 23})
    listProd.push({id : 4, name : "product 4", price : 72})
    listProd.push({id : 5, name : "product 5", price : 18})
    listProd.push({id : 6, name : "product 6", price : 5})

    return listProd
}