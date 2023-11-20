var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
}
xmlHttp.open("GET", "https://gist.githubusercontent.com/gcollazo/884a489a50aec7b53765405f40c6fbd1/raw/49d1568c34090587ac82e80612a9c350108b62c5/sample.json", true); // true for asynchronous 
xmlHttp.send(null);
