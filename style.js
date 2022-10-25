fetch("https://randomuser.me/api/").then(function(data){
      return  data.json()
     }).then(response =>{
       let result = response.results[0];
        let serverPicture = result.picture.large;
          let  pic = document.querySelector('#pic');
            pic.src = serverPicture;


            //name
        let name = result = response.results[0].name;
        let fullName =name.title + " " + name.first + " " + name.last;
        document.getElementById('name').innerHTML= '<b>NAME:</B> ' + fullName;


            //email
        let email = result = response.results[0].email;
        document.querySelector('#email').innerHTML= '<b>EMAIL:</B> ' +email;


          //gender
        let gender = result = response.results[0].gender;
        document.querySelector('#gender').innerHTML= '<b>GENDER:</B> ' +gender;


          //location
          let location = result = response.results[0].location;
          let fullLocation = "<br> street; " + location.street.number + " " + location.street.name + "<br> city; " + location.city + "<br> state; " + location.state + "<br> country; " + location.country + "<br> postcode; " +  location.postcode + "<br> coordinates; " + location.coordinates.latitude + " " + location.coordinates.longitude + "<br> timezone; " + location.timezone.offset + " " + location.timezone.description;
        document.querySelector('#location').innerHTML= '<b>LOCATION:</B> ' +fullLocation;


        //login
        let login = result = response.results[0].login;
        let fullLogin = "<br> uuid; " + login.uuid + "<br> username; " + login.username + "<br> password; " + login.password + "<br> salt; " + login.salt + "<br> md5; " + login.md5 + "<br> shal; " + login.shal + "<br> sha256; " + login.sha256;
        document.querySelector('#login').innerHTML= '<b>LOGIN:</B> ' +fullLogin;

        //date of birth
        let dob = result = response.results[0].dob;
        let fullDob =  "<br> date; " + dob.date +  "<br> age; " + dob.age;
        document.querySelector('#dob').innerHTML= '<b>DATE OF BIRTH:</B> ' +fullDob;


        //registered
        let registered = result = response.results[0].registered;
        let fullRegister = "<br> date; " + registered.date + "<br> age; " + registered.age;
        document.querySelector('#registered').innerHTML= '<b>REGISTER:</B> ' +fullRegister;

        //phone
        let phone = result = response.results[0].phone;
        document.querySelector('#phone').innerHTML= '<b>PHONE:</B> ' +phone;


         //cell
         let cell = result = response.results[0].cell;
         document.querySelector('#cell').innerHTML= '<b>CELL:</B> ' +cell;


          //id
        let id = result = response.results[0].id;
        let fullId = "<br> name; " + id.name + "<br> value; " + id.value;
        document.querySelector('#id').innerHTML= '<b>IDENTIFICATION CARD:</B> ' +fullId;

        //nation
        let nation = result = response.results[0].nat;
        document.querySelector('#nat').innerHTML= '<b>NATION:</B> ' +nation;

        //information
        let information = result = response.info;
        let fullInfo = "<br> seed; " + information.seed + "<br> results; " + information.results + "<br> page; " + information.page + "<br> version; " + information.version;
        document.querySelector('#info').innerHTML= '<b>INFORMATION:</B> ' +fullInfo;

     }).catch(err =>{
        console.log(err)
     })