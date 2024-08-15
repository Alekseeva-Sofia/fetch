fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const users = data.data;
    // document.getElementById("users-container").innerHTML = JSON.stringify(data);
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Email: ${user.email}, 
        Имя: ${user.first_name}, Фамилия: ${user.last_name}`);
    });
    console.log("Пункт №2:");
    const filteredUsers = users.filter((user) =>
      user.last_name.startsWith("M")
    );
    filteredUsers.forEach((user) => {
      console.log(
        `ID: ${user.id}, Email: ${user.email}, First Name: ${user.first_name},
         Last Name: ${user.last_name}`
      );
    });
    console.log("Пункт №3:");
    const userNames = users.reduce((acc, user, index) => {
      if (index === 0) {
        return `${user.first_name} ${user.last_name}`;
      }
      return `${acc}, ${user.first_name} ${user.last_name}`;
    }, "Наша база содержит данные следующих пользователей: ");

    console.log(userNames);
  })
  .catch((error) => {
    console.log("сообщение об ошибке", error);
  });
