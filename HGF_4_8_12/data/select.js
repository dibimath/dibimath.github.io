tremppi.select.setup = {"columns": [{"field": "select", "resizable": false, "caption": "", "size": "25px", "editable": {"type": "check"}}, {"field": "name", "resizable": true, "caption": "Name", "size": "100px", "editable": {"type": "text"}}, {"field": "K_A_0", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "0", "size": "40px", "resizable": true}, {"field": "K_A_1", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "1", "size": "40px", "resizable": true}, {"field": "K_B_00", "editable": {"type": "text", "min": 0, "max": 2}, "caption": "0,0", "size": "48px", "resizable": true}, {"field": "K_B_02", "editable": {"type": "text", "min": 0, "max": 2}, "caption": "0,2", "size": "48px", "resizable": true}, {"field": "K_B_10", "editable": {"type": "text", "min": 0, "max": 2}, "caption": "1,0", "size": "48px", "resizable": true}, {"field": "K_B_12", "editable": {"type": "text", "min": 0, "max": 2}, "caption": "1,2", "size": "48px", "resizable": true}, {"field": "S_B_1_A", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "B,1,A", "size": "56px", "resizable": true}, {"field": "S_A_1_B", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "A,1,B", "size": "56px", "resizable": true}, {"field": "S_B_2_B", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "B,2,B", "size": "56px", "resizable": true}, {"field": "E_A", "editable": {"type": "text", "min": 0, "max": 1024}, "caption": "A", "size": "24px", "resizable": true}, {"field": "E_B", "editable": {"type": "text", "min": 0, "max": 1024}, "caption": "B", "size": "24px", "resizable": true}, {"field": "E_SUM", "editable": {"type": "text", "min": 0, "max": 1024}, "caption": "SUM", "size": "40px", "resizable": true}, {"field": "B_A", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "A", "size": "24px", "resizable": true}, {"field": "B_B", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "B", "size": "24px", "resizable": true}, {"field": "I_B_1_A", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "B,1,A", "size": "56px", "resizable": true}, {"field": "I_A_1_B", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "A,1,B", "size": "56px", "resizable": true}, {"field": "I_B_2_B", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "B,2,B", "size": "56px", "resizable": true}, {"field": "R_series", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "series", "size": "64px", "resizable": true}, {"field": "R_oscillation", "editable": {"type": "text", "min": 0, "max": 1}, "caption": "oscillation", "size": "104px", "resizable": true}, {"field": "C_series", "editable": {"type": "text", "min": 0, "max": 1024}, "caption": "series", "size": "64px", "resizable": true}, {"field": "C_oscillation", "editable": {"type": "text", "min": 0, "max": 1024}, "caption": "oscillation", "size": "104px", "resizable": true}], "groups": [{"master": false, "columns": ["select", "name"], "hideable": false, "caption": "", "span": 2}, {"master": false, "columns": ["K_A_0", "K_A_1"], "hideable": true, "caption": "K<sub>A</sub>(B)", "span": 2}, {"master": false, "columns": ["K_B_00", "K_B_02", "K_B_10", "K_B_12"], "hideable": true, "caption": "K<sub>B</sub>(A,B)", "span": 4}, {"master": false, "columns": ["S_B_1_A", "S_A_1_B", "S_B_2_B"], "hideable": true, "caption": "Sign(edge)", "span": 3}, {"master": false, "columns": ["E_A", "E_B", "E_SUM"], "hideable": true, "caption": "Indegree(component)", "span": 3}, {"master": false, "columns": ["B_A", "B_B"], "hideable": true, "caption": "Bias(component)", "span": 2}, {"master": false, "columns": ["I_B_1_A", "I_A_1_B", "I_B_2_B"], "hideable": true, "caption": "Impact(edge)", "span": 3}, {"master": false, "columns": ["R_series", "R_oscillation"], "hideable": true, "caption": "Robustness(property)", "span": 2}, {"master": false, "columns": ["C_series", "C_oscillation"], "hideable": true, "caption": "Cost(property)", "span": 2}]};