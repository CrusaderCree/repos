let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => { 
  if(xhr.readyState === 4) {
   var employees = JSON.parse(xhr.responseText);
   let statusHTML = '<ul class="bulleted">';
   for(let i = 0; i <  employees.length; i++){
       if( employees[i].inoffice === true) {
            statusHTML += '<li class="in"<>';
        } else {
            statusHTML += '<li class="out"<>';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>'

   }
   statusHTML += '</ul>'
   document.getElementById('employeeList').innerHTML = statusHTML
  }


};
xhr.open('GET','data/employees.json');
xhr.send();

let xhr_rooms = new XMLHttpRequest();
xhr_rooms.onreadystatechange = () => { 
  if(xhr_rooms.readyState === 4) {
   var rooms = JSON.parse(xhr_rooms.responseText);
   let statusHTML = '<ul class="bulleted">';
   for(let i = 0; i <  rooms.length; i++){
       if( rooms[i].available === true) {
            statusHTML += '<li class="in"<>';
        } else {
            statusHTML += '<li class="out"<>';
        }
        statusHTML += rooms[i].room;
        statusHTML += '</li>'

   }
   statusHTML += '</ul>'
   document.getElementById('roomList').innerHTML = statusHTML
  }


};
xhr_rooms.open('GET','data/rooms.json');
xhr_rooms.send();