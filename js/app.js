let infoBip = null;

fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`)
    .then(response => response.json())
    .then(data => {
        infoBip = data;
        console.log(data);
    });