const button = document.getElementById("loadButton");
const usersContainer = document.querySelector(".users");

button.addEventListener("click", async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("server response wasn't OK");
        }

        const users = await response.json();
        usersContainer.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement("div");
            div.className = "user";

            div.innerHTML = `
                <h3>User</h3>

                <p><strong>id:</strong> ${user.id}</p>
                <p><strong>name:</strong> ${user.name}</p>
                <p><strong>username:</strong> ${user.username}</p>
                <p><strong>email:</strong> ${user.email}</p>

                <h4>address</h4>
                <p><strong>street:</strong> ${user.address.street}</p>
                <p><strong>suite:</strong> ${user.address.suite}</p>
                <p><strong>city:</strong> ${user.address.city}</p>
                <p><strong>zipcode:</strong> ${user.address.zipcode}</p>

                <h5>geo</h5>
                <p><strong>lat:</strong> ${user.address.geo.lat}</p>
                <p><strong>lng:</strong> ${user.address.geo.lng}</p>

                <p><strong>phone:</strong> ${user.phone}</p>
                <p><strong>website:</strong> ${user.website}</p>

                <h4>company</h4>
                <p><strong>name:</strong> ${user.company.name}</p>
                <p><strong>catchPhrase:</strong> ${user.company.catchPhrase}</p>
                <p><strong>bs:</strong> ${user.company.bs}</p>
            `;

            usersContainer.appendChild(div);
        });

    } catch (error) {
        usersContainer.textContent = "error happened while loading users data";
        console.error(error);
    }
});
