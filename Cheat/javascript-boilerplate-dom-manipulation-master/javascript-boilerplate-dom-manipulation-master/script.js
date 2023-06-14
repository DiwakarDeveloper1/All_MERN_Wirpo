function mainfunction(e) {
    event.preventDefault();
}

const issueSummary = () => {
    fetch('http://localhost:3000/issues')
        .then(res => res.json())
        .then(data => {
            let listItem = "";
            let li = "";
            data.map(item => {
                listItem += `<tr><th>${item.name}</th><td>${item.total}</td><td>${item.open}</td><td>${item.my_issues}</td></tr>`
                li += `<li><a class="dropdown-item" href="#">${item.name}</a></li>`
            })
            document.getElementById('tbody').innerHTML = listItem;
            document.getElementById('dropDownItem').innerHTML = li;
        })
}

issueSummary();


const popup = () => {
    let txt = document.getElementById('popupValue').value;
    alert(`count: ${txt}`);
    document.getElementById('input1').style.display = "none";
    document.getElementById('input2').style.display = "none";
    document.getElementById('goBtn').style.display = "none";
    document.getElementById('dropDown').style.display = "block";
}

const createIssue = () => {
    let repoName = document.getElementById('repoName').value;

    fetch('http://localhost:3000/issues',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:`${repoName}`,
            total:0,
            open:0,
            my_issues:0,
            isCompleted:false
        })
    })
}