var table = document.getElementsByTagName('table')[0];

function table_to_csv(element) {
	var csv = [];
	for(var i = 0; i < element.rows.length; i++){
		var tr = element.rows[i];
		var row = [];
		for(var j = 0; j < tr.cells.length; j++){
			var td = tr.cells[j];
			row.push('"'+td.innerText.replace(/\n|\r/, ' ')+'"');
		}
		csv.push(row.join(','))
	}
	return _csv(csv.join("\n"));
}

function _csv(data){
	var date = (new Date()).toISOString().slice(0,10);
	var file = "Export "+date+".csv";
	var DOMURL = window.URL || window.webkitURL || window;
	var csv = new Blob([data], {type: 'text/csv'});
	var url = DOMURL.createObjectURL(csv);
	var download = document.createElement('a');
	download.href=url;
	download.innerHTML="Export";
	download.download=download.title=file;
	download.classList="btn btn-primary fr";
	return download;
}

document.body.append(table_to_csv(table));