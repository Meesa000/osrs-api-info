const searchPlayer = document.getElementById('search-player');
const searchPlayerBtn = document.getElementById('search-player-button');
const infoContainer = document.getElementById('info-container');



function getStats() {
   // get username value from search-player everytime button clicked
   const playerName = document.getElementById('search-player').value;
   const baseUrl = 'http://localhost:3000/api/proxy';
   const url = `${baseUrl}?player=${encodeURIComponent(playerName)}`;

   // Clear previous data
   infoContainer.innerHTML = '';
   
    fetch(url)
   .then(response => {
    return response.json();
   })
   .then (data => {
      
    for (i=0;i < data.skills.length;i++) {
      let skillList = document.createElement('ul');
      let levelList = document.createElement('ul');
      skillList.innerHTML = '<ul><li>' + '<h3>' + data.skills[i].name+ '</h3>' + '</li></ul>';
      levelList.innerHTML = '<ul><li>'+ 'Level: ' + data.skills[i].level +'</li></ul>';
      infoContainer.appendChild(skillList);
      infoContainer.appendChild(levelList);
      console.log(data.skills[i]);
  } 
  
   
   });

      
}

searchPlayerBtn.addEventListener('click',getStats);


