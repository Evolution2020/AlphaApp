// Work around for removing debug tools when we no longer need them
var showDebugTools = true;
if(showDebugTools){
document.write("<div id=\"floating-panel\">" +
    "<input onclick=\"objectGenerator.clearMarkers();\" type=button value=\"Hide Markers\">" +
    "<input onclick=\"objectGenerator.showMarkers();\" type=button value=\"Show All Markers\">" +
    "<input onclick=\"objectGenerator.deleteMarkers();\" type=button value=\"Delete Markers\">" +
    "</div>");
}