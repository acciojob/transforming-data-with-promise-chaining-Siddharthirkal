const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

btn.onclick = function () {

    // Clear previous output
    output.innerText = "";

    const value = Number(input.value);

    // First Promise (2 seconds)
    new Promise((resolve, reject) => {
        setTimeout(() => {
            output.innerText = `Result: ${value}`;
            resolve(value);
        }, 2000);
    })

    // Second Promise (2 seconds)
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })

    // Third Promise (1 second)
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })

    // Fourth Promise (1 second)
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })

    // Fifth Promise (1 second)
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let finalResult = num + 10;
                output.innerText = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    })

    .catch((error) => {
        output.innerText = "Something went wrong!";
        console.log(error);
    });

};