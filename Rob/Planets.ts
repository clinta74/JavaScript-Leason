import axios from "axios";

async function run() {

    let url = "https://swapi.dev/api/planets/";
    while (url !== null) {
        try {
            const response = await axios.get(url);
            response.data.results.forEach((planet: any) => {
                console.log(planet.name)
            });
            url = response.data.next;

        } 
            catch (error) {
            console.log(error)

        }

    }
}
// run()


function myDisplayer(some : any) {
    console.log(some);
  }
  
  let myPromise = new Promise((myResolve, myReject) => {
    let x = 2;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } 
    else if (x==1){
        myResolve("x=1");
    }
    else {
      myReject("Error");
    }
  });
  
  myPromise.then(value => {myDisplayer(value);})
   .catch(error => {myDisplayer(error)})
    //function(value) {myDisplayer(value);},
    //function(error) {myDisplayer(error);}
    