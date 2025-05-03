let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => { 
  if(xhr.readyState === 4) {
   var employees = JSON.parse(xhr.responseText);
  }


};
xhr.open('GET','data/employees.json');
xhr.send();