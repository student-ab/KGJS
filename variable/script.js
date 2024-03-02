let card = 0;

let change = document.querySelector('#card-summery')
const one = () =>{
  card = card + 1;
change.innerText = `your bag has  ${card} itmes`

}
const move = () =>{
  card = card - 1;
change.innerText = `your bag has  ${card} itmes`

}
const two = () =>{
  card = card + 2;
change.innerText = `your bag has  ${card} itmes`

}
