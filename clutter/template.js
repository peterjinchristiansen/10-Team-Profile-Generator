const firstHTML = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="./clutter/style.css">
    <style>@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap');</style>
</head>
<body>
    
    <header id="headerDiv">
        <h1 id="heading">Employees</h1>
    </header>

    <div id="teamDiv">
`;





const lastHTML = `
</div>


<script src="template.js"></script>

</body>
</html>
`


function template(myTeam) {






const businessCards2 = `
</div>
</div>
`;

    const allBusinessCards = [];

    for(i = 0; i < myTeam.length; i++) {

        const businessCards1 = `
        <div class="littleDiv">
        <div class="littleHeader">
            <h1>${myTeam[i]['name']}</h1>
            <h2>${myTeam[i]['job']}</h2>
        </div>
        <div class="littleContent">
            <h3>ID: ${myTeam[i]['id']}</h3>
            <h3>E-mail: <a href="mailto:${myTeam[i]['email']}">${myTeam[i]['email']}</a></h3>
        `
        
        
        
        const managerLine = `<h3>Office Number: ${myTeam[i]['office']}</h3>`
        const engineerLine = `<h3>GitHub: <a href="https://github.com/${myTeam[i]['github']}" target="_blank">https://github.com/${myTeam[i]['github']}</a></h3>`
        const internLine = `<h3>School: ${myTeam[i]['school']}</h3>`

        var newArray = [];
        if (myTeam[i]['job'] === "Manager") {
            newArray = [businessCards1, managerLine, businessCards2]
            var newArrayModified = `${newArray[0]} ${newArray[1]} ${newArray[2]}`
        } else if (myTeam[i]['job'] === "Engineer") {
            newArray = [businessCards1, engineerLine, businessCards2]
            var newArrayModified = `${newArray[0]} ${newArray[1]} ${newArray[2]}`
        } else {
            newArray = [businessCards1, internLine, businessCards2]
            var newArrayModified = `${newArray[0]} ${newArray[1]} ${newArray[2]}`
        }

        allBusinessCards.push(newArrayModified);
    }


    return `
    
${firstHTML}

${allBusinessCards}

${lastHTML}

    `;
}

module.exports = template;