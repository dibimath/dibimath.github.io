/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

tremppi.interact.layout = function() {
    $("#data").height($("body").height() - $("#description").height() -  $("#interact_controls").height());
    $(".graph").height($("#data").height() -  $(".caption").height());
    var types = tremppi.data.config.types;
    for (var i = 0; i < types.length; i++) {
        $("#graph_" + types[i]).cytoscape('get').resize();
    }
    tremppi.interact.Labels.loadLabels();
};

