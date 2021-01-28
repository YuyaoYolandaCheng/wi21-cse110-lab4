// if (2 == true){
//     console.log('Hello!');
// }else if (2){
//     console.log('How are you?');
// }else{
//     console.log('Goodbye');
// }
function print_out(){
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const s in statistics){
    if (s.charAt(0) == 'r' || statistics[s] % 2 == 1){
        console.log(statistics[s]);
    }
}


return;
}

print_out();

