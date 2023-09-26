document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    // Realiza una solicitud GET a la API de JSONPlaceholder para obtener la lista de usuarios
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error al cargar la lista de usuarios:", error);
        });
});
