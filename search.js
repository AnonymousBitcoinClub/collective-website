// Function to redirect to index.html with the search query
function redirectToSearch() {
    let input = document.getElementById("searchBar").value;
    if (input) {
        window.location.href = `index.html?search=${encodeURIComponent(input)}`;
    }
}

// Function to perform the search on index.html
function searchSite() {
    // Check if there's a search query in the URL
    let urlParams = new URLSearchParams(window.location.search);
    let searchQuery = urlParams.get('search') ? urlParams.get('search').toLowerCase() : '';

    // If there's a search query, set it in the search bar
    let searchBar = document.getElementById("searchBar");
    if (searchQuery && searchBar) {
        searchBar.value = searchQuery;
    }

    // Perform the search on the current page's sections
    let input = searchBar ? searchBar.value.toLowerCase() : '';
    let sections = document.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
        let text = sections[i].innerText.toLowerCase();
        sections[i].style.display = text.includes(input) ? "" : "none";
    }
}
