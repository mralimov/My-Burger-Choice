$(document).ready(() => {

    $(".create-burger-form").on("submit", () => {
      event.preventDefault(); 
      if (($("#burger_name").val().trim()).length > 0) {
        let newBurger = {
          burger_name: $("#burger_name").val().trim()
        }

        $.ajax("/api/newburger", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("Created a new burger and with default true");

            location.reload();
          }
        );
  
      } else {

        $('#alertModal').modal('show');
      }
    });
  
    $(".btn-burger").on("click", function () {
      let selectedID = {
        id: $(this).data("id")
      }
  
      $.ajax("/api/update", {
        type: "PUT",
        data: selectedID
      }).then(
        function () {
          console.log("Updated burger by setting devoured to True");

          location.reload();
        }
      );
    })
  
  
  
  
  })