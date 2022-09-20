const phones = [
    {name: 'samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
    {name: 'walton', camera:10, storage:'32gb', price:22000, color:'silver'},
    {name: 'iphone', camera:16, storage:'64gb', price:60000, color:'silver'},
    {name: 'oppo', camera:12, storage:'16gb', price:36000, color:'silver'},
    {name: 'samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
    {name: 'samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
    {name: 'samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
];

function cheapestPhone(phones){
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);