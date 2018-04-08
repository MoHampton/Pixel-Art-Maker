$(document).ready(function() {
    
// Variable: Select color 
  let gridCol = $("#colorPicker").val();

// Variable: Select grid size
  let rowCount = $("#inputHeight").val();
  let colCount = $("#inputWidth").val();

// When size is submitted by the user, call makeGrid()
  $("#submit").click(function() {
    makeGrid();
  });

// Event listener to add color
  $("table").on("click", "td", function() {
    gridCol = $("#colorPicker").val();
    $(this).css("background-color", gridCol);
  });

// Click & drag color action
  $("table").on("mousemove mouseenter mouseleave mouseover", "td", function(e) {
     if (e.which === 1) {
      gridCol = $("#colorPicker").val();
       $(this).css("background-color", gridCol);
     }
   });

  function makeGrid() {
    resetGrid(); //Resets the grid and removes old pixel art
    //Creates table row parents
    for (let rows = 0; rows < rowCount; rows++) {
      let gridVal = $('<tr></tr>');
      $('#pixelCanvas').append('<tr class="gridRow"></tr>');
      //alert(gridVal);
    }
    //Creates and append tabe data (columns) into parent table rows
    for (let cols = 0; cols < colCount; cols++) {
      $('tr').append('<td class="gridCol"></td>');
    }
  }

  //Resets grid without refreshing the page
  function resetGrid() {
    rowCount = $('#inputHeight').val(); //resets height
    colCount = $('#inputWidth').val(); //resets width 
    $('.gridRow').remove();//removes old grid
  }
});