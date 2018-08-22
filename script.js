import request from 'superagent'

request.get('https://api.github.com/users/Alexswansboro')
  .auth('a80f7ce59f71c92d308a183cd926323403a1daf3')
  .then(response => {
    displayBusinessCard(response.body)
  })

function displayBusinessCard (results) {
  let output = `
<h1>${results.name}</h1>
<div class="parent">
    <div id='info_container'>
      <div class='mini_container'>
          <p class='label'>Name</p>
          <div class='info_item' id= 'name'>${results.name}</div>
      </div>
      <div class='mini_container'>
          <p class='label'>Git Hub URL </p>
          <a href src='${results.html_url}' class = 'info_item' id='git_hub_url'>${results.login}</a>
      </div>
      <div class='mini_container'>
          <p class='label'>Location </p>
          <div class = 'info_item' id='location'>${results.location}</div>    
      </div>
      <div class='mini_container'>
        <p class='label'>Website</p>
        <a href src= '${results.html_url}'class='item_info' id='website'>Alexswansboro.github</a>
      </div>
    </div>
    <div id='pic_container'>
      <p class= 'bio_element' id='bio'>${results.bio}</p>
      <img src= '${results.avatar_url}' class= 'bio_element' id='main_pic' alt= '${results.name}'>
    </div>
</div>
  `
  document.getElementById('output').innerHTML = output
}
