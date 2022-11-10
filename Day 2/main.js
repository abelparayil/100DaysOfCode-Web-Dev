const input = document.getElementById('search');
const gridElement = document.querySelector('.grid-api');

async function fetchApi() {
    const data = await fetch(`https://api.publicapis.org/entries`).then((response) => response.json());
    if (data.count !== 0) {
        paginate(data.entries, data.count);
    } else {
        hideData();
    }
}

function paginate(items, itemsLength) {
    if (itemsLength !== 0) {
        let itemsPerPage = 8;
        let currentPage = 1;
        let totalPages = Math.ceil(itemsPerPage * itemsLength);

        if (itemsLength > 8) {
            document.querySelector('.pagination').style.opacity = 1;
        }

        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        next.addEventListener('click', function () {
			if (currentPage === totalPages) {
				return false;
			}
			currentPage++;
			filtredItems();
		});

        prev.addEventListener('click', function () {
            if (currentPage === 1) {
                return false;
            }
            currentPage--;
            filtredItems();
        });
        
        function filtredItems() {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const filtredItems = items.slice(indexOfFirstItem, indexOfLastItem);
            showItems(filtredItems);
        }
        filtredItems();
    }
}

function hideData() {
    gridElement.innerHTML = '';
    document.querySelector('.pagination').style.opacity = 0;
}

function showItems(dataAPI) {
    gridElement.innerHTML = '';
    dataAPI.forEach((element) => {
        const itemElement = document.createElement('a');
        itemElement.classList.add('item');
        itemElement.setAttribute('href', `${element.Link}`);
        itemElement.setAttribute('target', '_blank');
        itemElement.innerHTML = `
            <h2>${element.API}</h2>
            <span>${element.Category}</span>
            <p>${element.Description}</p>
        `;
        gridElement.append(itemElement);
    });
}

async function searchAPI(query) {
    const data = await fetch(`https://api.publicapis.org/entries?category=${query}&https=true`).then((response) =>
        response.json()
    );
    if (data.count !== 0) {
        paginate(data.entries, data.count);
    } else {
        hideData();
    }
}

input.addEventListener('keyup', function (e) {
    const value = e.target.value;
    searchAPI(value);
});

fetchApi();