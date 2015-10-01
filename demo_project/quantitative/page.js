/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global tremppi */

tremppi.quantitative.page = function () {
    if (typeof tremppi.quantitative.setup === 'undefined') {
        $("#widget").html("No quantitative report has been created yet.");
    } else {
        tremppi.report.createPanels();        
        for (var i = 0; i < tremppi.report.panels.length; i++) {
            $('#container_' + tremppi.report.panels[i]).html("");
            $("#container_" + tremppi.report.panels[i]).append('<div id="table_' + tremppi.report.panels[i] + '" class="report_content" ></div>');
            $("#container_" + tremppi.report.panels[i]).append('<div id="desc_' + tremppi.report.panels[i] + '" class="description" ></div>');
        }
        tremppi.report.initialPanel();
    }
};

tremppi.quantitative.setData = function (data) {
    tremppi.toolbar.onClick = tremppi.quantitative.toolbarClick;
};

tremppi.quantitative.getData = function () {
    return {};
};

tremppi.quantitative.layout = function () {
};

tremppi.quantitative.toolbarClass = function () {
    return {
        name: 'toolbar',
        items: [
            {type: 'radio', id: 'all', group: '1', caption: 'All', checked: true},
            {type: 'radio', id: 'left', group: '1', caption: 'Left'},
            {type: 'radio', id: 'mid', group: '1', caption: 'Mid'},
            {type: 'radio', id: 'right', group: '1', caption: 'Right'}
        ]
    };
};