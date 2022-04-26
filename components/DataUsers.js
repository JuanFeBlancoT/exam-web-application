export default function getData(){

  const fs = require('fs');

  let data = fs.readFileSync('database.json');
  console.log(data);
}