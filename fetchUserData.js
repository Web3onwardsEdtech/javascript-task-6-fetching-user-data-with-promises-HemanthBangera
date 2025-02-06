function fetchUserData(){
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response: Failure')
            }
            else{
                return response.json();
            }
        })
        .then((info) => {
            resolve({name: info.name, email: info.email});
        })
        .catch(error => {
            reject('Error in fetching user data');
        });
        
    });
}

fetchUserData().then(data => console.log(data)).catch(error => console.log(error));