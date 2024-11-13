// ------------------------------------------------------------------------ //
// ---------------                 Node class             ----------------- //
// ------------------------------------------------------------------------ //
class Node {
  constructor(id, lat, lon) {
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.visible = true;
  }
}

// ------------------------------------------------------------------------ //
// ---------------                 Edge class             ----------------- //
// ------------------------------------------------------------------------ //
class Edge {
  constructor(v, w) {
    this.v = v;
    this.w = w;
  }
}

// ------------------------------------------------------------------------ //
// ---------------               Distance class           ----------------- //
// ------------------------------------------------------------------------ //
class Distance {
  constructor(value, visited) {
    this.value = value;
    this.visited = visited;
  }
}

// ------------------------------------------------------------------------ //
// ---------------                Stack class             ----------------- //
// ------------------------------------------------------------------------ //
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// ------------------------------------------------------------------------ //
// ---------------       Initialize the Leaflet map       ----------------- //
// ------------------------------------------------------------------------ //
var maxB = L.latLngBounds([21.045001, 105.846156], [21.039919, 105.847561]);

var map = L.map("map", {
  maxBounds: maxB,
  maxBoundsViscosity: 1.0,
  center: [21.041947, 105.8473907],
  zoom: 17,
  minZoom: 10,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// ------------------------------------------------------------------------ //
// ---------------             Global variables           ----------------- //
// ------------------------------------------------------------------------ //
const MAX_INT = 100000;
const DELAY = (ms) => new Promise((res) => setTimeout(res, ms));

var NodeList = [];
var StartNode = new Node(-1, -1, -1);

// ------------------------------------------------------------------------ //
// ---------------              Helper functions          ----------------- //
// ------------------------------------------------------------------------ //

function refreshPoint() {
  StartNode = new Node(-1, -1, -1);
  EndNode = new Node(-1, -1, -1);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
}

function showPopup(price) {
  Swal.fire({
      text: `Khu vực có giá trung bình khoảng 20,000,000,000 VNĐ, giá thấp nhất khoảng 9,000,000,000 VNĐ`,
      icon: 'info',
      confirmButtonText: 'Đóng',
      confirmButtonColor: '#4CAF50',
      backdrop: false,
      preConfirm: () => {
        refreshPoint();
      }
  });
}

function showAlert(content="Please try again!") {
  
}

// ------------------------------------------------------------------------ //
// ---------------          Get data from map.xml         ----------------- //
// ------------------------------------------------------------------------ //
function getDataXml(xmlFile) {
  var xmlDoc;
  if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", xmlFile, false);
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType("text/xml");
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
  } else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load(xmlFile);
  }

  return xmlDoc;
}

function getDataNodes(xmlDoc) {
  var nodeList = [];

  var nodes = xmlDoc.getElementsByTagName("node");
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const id = node.id;
    const lat = node.attributes[7].nodeValue;
    const lon = node.attributes[8].nodeValue;
    nodeList.push(new Node(id, lat, lon));
  }

  return nodeList;
}

// ------------------------------------------------------------------------ //
// ---------------              Event listener            ----------------- //
// ------------------------------------------------------------------------ //

// Add event listener for map click
map.on("click", async function (e) {
  if (StartNode.lat != -1) return;
  if (StartNode.lat == -1) {
    StartNode.lat = e.latlng.lat;
    StartNode.lon = e.latlng.lng;

    L.marker([StartNode.lat, StartNode.lon]).addTo(map);
    await DELAY(200);

    showPopup();
  }
});

// ------------------------------------------------------------------------ //
// ---------------             DOMContentLoaded           ----------------- //
// ------------------------------------------------------------------------ //
document.addEventListener("DOMContentLoaded", function () {
  var xmlData = getDataXml("./assets1/map.xml");
  NodeList = getDataNodes(xmlData);
});