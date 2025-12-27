let userContainer = document.getElementById("user");
userContainer.innerHTML = "";

async function getRandomUser(){
    try{
        let response = await fetch("https://randomuser.me/api/");
        let data = await response.json();
        let userData = data.results[0];
        let image = userData.picture.large;
        let name = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
        let gender = userData.gender;
        let email = userData.email;
        let location = `${userData.location.city}, ${userData.location.country}`;
        userContainer.innerHTML = `<img src="${image}">
                                    <h1>${name}</h1>
                                    <p>Gender: ${gender}</p>
                                    <p>Email: ${email}</p>
                                    <p>Location: ${location}</p>`;
    }
    catch(error){
        userContainer.innerHTML = "<p>Unable to fetch the data</p>";
        console.log(error);
    }
}