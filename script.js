      let button = document.getElementById("submit-button");
      let fullname = document.getElementById("fullname");
      let email = document.getElementById("email");
      let text = document.getElementById("message");


      function formValidator(){

        let feedback = {};
        let errors = [];

        if (fullname.value !== ""){
          feedback.name = fullname.value;
        }else{
          errors.push("<p>Please provide your full name</p>");
        }

        if (email.value !== ""){
          feedback.mail = email.value;
        }else{
          errors.push("<p>Please provide your email</p>");
        }

        if (text.value !== ""){
          feedback.msg = text.value;
        }else{
          errors.push("<p>Please provide your message</p>");
        }

        if (errors.length === 0){
          console.log(feedback);
        }else{
          console.log(errors);
        }
      };

      button.addEventListener("click", formValidator);
