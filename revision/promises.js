const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve({
            id: 14142,
            name: "Riddhi"
        });
    } else {
        reject("Error");
    }
})
promise1.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error.message);
});
