import connect from 'react-redux';

export const sendbro = (property,abc)=>{

    // let Names = 

    //     ['Alpha','Atom','Marathon','Mist','Granate','Bolso'];
let Names = [];
        //capitall rakhnaa haiii pehlaa lettter

    let arr = [
        
        // firsttt
        [
        'https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Blue_perfil_720x.jpg?v=1606432412',
        'https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Grape_perfil_1024x1024@2x.jpg?v=1606432410',
        
    ],
[

    'https://cdn.shopify.com/s/files/1/1241/4530/products/AtomDual_Black_perfil_720x.jpg?v=1609974922',
    'https://cdn.shopify.com/s/files/1/1241/4530/products/AtomDual_Blue_perfil_720x.jpg?v=1609974924',
    

],

[
    'https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonMilano_Blue_perfil_720x.jpg?v=1609974891',
    'https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonMilano_Green_perfil_720x.jpg?v=1609974893',
    
    
],

[
    'https://cdn.shopify.com/s/files/1/1241/4530/products/MistBrownPerfil_720x.jpg?v=1538979016',
    'https://cdn.shopify.com/s/files/1/1241/4530/products/MistBlackPerfil_720x.jpg?v=1538979015',
    'https://cdn.shopify.com/s/files/1/1241/4530/products/MistGreyPerfil_720x.jpg?v=1538979013',
    
],

[
    'https://cdn.shopify.com/s/files/1/1241/4530/products/Granate_01_1024x1024@2x.jpg?v=1549360758',
],

['https://cdn.shopify.com/s/files/1/1241/4530/products/Bolso_block_azul_marino_1_540x.jpg?v=1567393346']



        // firsttt
]

arr.forEach(elem=>{
    
elem.forEach(eachi=>{

let splitting = eachi.lastIndexOf('/');
// console.log(splitting);

let check = eachi.slice(splitting+1).substring(0,3);
Names.push(check);

})
})

let x = (namesss) => namesss.filter((v,i) => namesss.indexOf(v) == i)

let FourCharacters = x(Names);


let tosthring = property.toString();


arr.forEach((elem,index)=>{

let ap = tosthring.includes(FourCharacters[index])
    // console.log(ap);
if(ap){



elem.push(tosthring);   
}
})

let filtered = arr.filter(elem=>{

    let finding = elem.find(eachi=>{
        return eachi.includes(tosthring);
    })

    return finding;
    
})




return [...filtered];




}