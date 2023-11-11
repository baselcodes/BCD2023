// the api call
const base_url = "https://participatory-archives.ch/api/items?&item_set_id[]=150883"
 
// empty variable
let data;

function preload() {
	loadJSON(base_url, (res) => {
		data = Object.values(res);
		console.log(data)
	})
}
function setup() {
	cnv = createCanvas(640, 640);
	background(0);
}

function draw() {

}

