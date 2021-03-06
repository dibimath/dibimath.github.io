/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global tremppi */

tremppi.qualitative.getGrid = function (grid_name) {
    return {
        name: grid_name,
        header: grid_name,
        show: {
            header: true
        },
        columns: [
            {field: 'name', caption: 'Name', size: '20%', sortable: true},
            {field: 'entries', caption: 'Entries', size: '10%'},
            {field: 'value', caption: 'Value', size: '70%'}
        ]
    };
};

tremppi.qualitative.setPanel = function (panel) {
    tremppi.widget[panel] = $('#container_' + panel).w2grid(tremppi.widget.getGrid(panel));
};

tremppi.qualitative.valuesToRecords = function (values) {
    var records = [];
    for (var i = 0; i < values.length; i++) {
        var record = {name: values[i].name, entries: 0, value: ""};
        for (var j = 0; j < values[i].data.length; j++) {
            if (values[i].data[j].portion !== 0.0) {
                record.value += "<b>" + values[i].data[j].name + "</b>:" + (Math.round(values[i].data[j].portion * 10000) / 100) + ", ";
                record.entries++;
            }
        }
        records.push(record);
    }
    return records;
};

tremppi.qualitative.valuesSetter = function (source, panel) {
    return function (data) {
        tremppi.qualitative[panel].values = data.values;
        tremppi.qualitative[panel].records = tremppi.qualitative.valuesToRecords(data.values);
        tremppi.qualitative[panel].header = source;
        tremppi.qualitative[panel].refresh();
        tremppi.log(source + " loaded successfully.");

        var sel_vals = tremppi.qualitative['left'].values;
        var dif_vals = tremppi.qualitative['mid'].values = [];
        var cmp_vals = tremppi.qualitative['right'].values;
        if (typeof sel_vals !== 'undefined' && typeof cmp_vals !== 'undefined') {
            for (var i = 0; i < sel_vals.length; i++) {
                var sel_val = sel_vals[i];
                var cmp_val = tremppi.report.findByName(cmp_vals, sel_val.name);
                if (typeof cmp_val.name !== 'undefined') {
                    var dif_val = {name: sel_val.name, data: []};
                    // Add those in select
                    for (var j = 0; j < sel_val.data.length; j++) {
                        var cmp_data = tremppi.report.findByName(cmp_val.data, sel_val.data[j].name);
                        if (typeof cmp_data.name !== 'undefined') {
                            dif_val.data.push({
                                name: sel_val.data[j].name,
                                portion: (sel_val.data[j].portion - cmp_data.portion)
                            });
                        }
                        else {
                            dif_val.data.push({
                                name: sel_val.data[j].name,
                                portion: sel_val.data[j].portion
                            });
                        }
                    }
                    // Add those in compare only
                    for (var j = 0; j < cmp_val.data.length; j++) {
                        var sel_data = tremppi.report.findByName(sel_val.data, cmp_val.data[j].name);
                        if (typeof sel_data.name === 'undefined') {
                            dif_val.data.push({
                                name: cmp_val.data[j].name,
                                portion: -cmp_val.data[j].portion
                            });
                        }
                    }
                    dif_vals.push(dif_val);
                }
            }

            tremppi.qualitative.mid.records = tremppi.qualitative.valuesToRecords(dif_vals);
            tremppi.qualitative.mid.header = tremppi.qualitative.left.header + " - " + tremppi.qualitative.right.header;
            tremppi.qualitative.mid.refresh();
        }
    };
};