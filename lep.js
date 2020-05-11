
function idName(e) {
    idN = "'" + e.id + "subnav'";
    console.log(idN);
  return idN;
}

function myFunction(dropMenu) {
    document.getElementById(dropMenu).classList.toggle("show");
}

  // Close the dropdown if the user clicks outside of it
  document.onmouseleave = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 
function makeVisible(a){
    let visibleID = ['newNews', 'typicalDayHinckleyID', 'typicalDayBurbageID', 'newsletterHinckleyID','newsletterBurbageID', 'newsletterForestschoolID','termsHinckleyID', 'termsBurbageID', 'openBurbageID', 'openHinckleyID', 'teamBurbageID', 'teamHinckleyID', 'teamForestschoolID'];
    
    for (let i=0; i<visibleID.length; i++){
        
        document.getElementById(visibleID[i]).style.display="none";
        document.getElementById(visibleID[i]).style.visibility="hidden";
        document.getElementById(visibleID[i]).style.paddingTop="15vh";
    }
  
    document.getElementById(a).style.display="block";
    document.getElementById(a).style.visibility="visible";
}
