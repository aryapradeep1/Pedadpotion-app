import React from 'react'

const NaviBar = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor:"#B5651D"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">𝑷𝒆𝒕 𝑨𝒅𝒐𝒑𝒕𝒊𝒐𝒏 🐶🐱</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <a class="nav-link" href="/">𝗔𝗱𝗱 𝗣𝗲𝘁𝘀➕</a>
        <a class="nav-link" href="/search">🔍 Search Pets</a>
        <a class="nav-link" href="/delete">🗑️ Delete Pets</a>
       <a class="nav-link" href="/view">🐶🐱 View Available Pets</a>
       <a class="nav-link" href="#">ℹ️ About Us</a>
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default NaviBar