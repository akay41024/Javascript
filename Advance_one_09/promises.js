const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise is resolved"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn task 2 is completed");
    resolve();
  }, 1000);
}).then(() => console.log("Asyn task 2 is resolved"));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "John Doe", age: 25 });
  }, 1000);
});

promiseThree.then((res) => console.log(res));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Promise is resolved");
      resolve({ username: "Aasif", password: 123 });
    } else {
      reject("Error: Sorry not fulfilled");
    }
  }, 1000);
});

promiseFour
  .then((res) => {
    console.log(res);
    return res.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("The promise is settled"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: 1234 });
    } else {
      reject("Error: Error Js somthing went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


getAllUsers();



fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
