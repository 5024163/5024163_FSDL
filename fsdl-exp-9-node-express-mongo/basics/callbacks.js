function getData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 2000);
}

getData(function(result) {
    console.log("Data received:", result);
});