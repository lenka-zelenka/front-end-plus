function renderData(data) {
    let [organization, repos] = [data[0], data[1]];
    console.log(organization, repos);

    var logo = document.getElementById("brand-logo");
    logo.innerHTML = `<img src="${organization.avatar_url}" alt="">`;

    var name = document.getElementById('repo-name');
    name.innerHTML = `<a href="${organization.html_url}">${organization.login}</a> `;
    renderTable(repos)

}

function renderTable(repos) {
    var content = document.getElementById('repo-content')
    for (key in repos) {
        content.innerHTML += `
        <tr>
        <td>${repos[key].name}</td>
        <td>${repos[key].default_branch}</td>
        <td>${repos[key].updated_at}</td>
        <td>${repos[key].language}</td>
    </tr>
        `
    }

}
module.exports = { renderData }