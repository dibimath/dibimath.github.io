tremppi.select.setup = {"columns": [{"resizable": false, "field": "select", "size": "25px", "editable": {"type": "check"}, "caption": ""}, {"resizable": true, "field": "name", "size": "100px", "editable": {"type": "text"}, "caption": "Name"}, {"resizable": true, "field": "K_A_0", "size": "30px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "{0}"}, {"resizable": true, "field": "K_A_1", "size": "46px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "{1,2}"}, {"resizable": true, "field": "K_B_00", "size": "78px", "editable": {"min": 0, "max": 2, "type": "text"}, "caption": "{0},{0,1}"}, {"resizable": true, "field": "K_B_02", "size": "62px", "editable": {"min": 0, "max": 2, "type": "text"}, "caption": "{0},{2}"}, {"resizable": true, "field": "K_B_10", "size": "78px", "editable": {"min": 0, "max": 2, "type": "text"}, "caption": "{1},{0,1}"}, {"resizable": true, "field": "K_B_12", "size": "62px", "editable": {"min": 0, "max": 2, "type": "text"}, "caption": "{1},{2}"}, {"resizable": true, "field": "S_B_1_A", "size": "56px", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "B,1,A"}, {"resizable": true, "field": "S_A_1_B", "size": "56px", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "A,1,B"}, {"resizable": true, "field": "S_B_2_B", "size": "56px", "editable": {"items": ["1", "0", "+", "-", " "], "type": "select"}, "caption": "B,2,B"}, {"resizable": true, "field": "E_A", "size": "24px", "editable": {"min": 0, "max": 1024, "type": "text"}, "caption": "A"}, {"resizable": true, "field": "E_B", "size": "24px", "editable": {"min": 0, "max": 1024, "type": "text"}, "caption": "B"}, {"resizable": true, "field": "E_SUM", "size": "40px", "editable": {"min": 0, "max": 1024, "type": "text"}, "caption": "SUM"}, {"resizable": true, "field": "B_A", "size": "24px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "A"}, {"resizable": true, "field": "B_B", "size": "24px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "B"}, {"resizable": true, "field": "I_B_1_A", "size": "56px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "B,1,A"}, {"resizable": true, "field": "I_A_1_B", "size": "56px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "A,1,B"}, {"resizable": true, "field": "I_B_2_B", "size": "56px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "B,2,B"}, {"resizable": true, "field": "C_test_ts", "size": "72px", "editable": {"min": 0, "max": 1024, "type": "text"}, "caption": "test_ts"}, {"resizable": true, "field": "C_test_cycle", "size": "96px", "editable": {"min": 0, "max": 1024, "type": "text"}, "caption": "test_cycle"}, {"resizable": true, "field": "R_test_ts", "size": "72px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "test_ts"}, {"resizable": true, "field": "R_test_cycle", "size": "96px", "editable": {"min": 0, "max": 1, "type": "text"}, "caption": "test_cycle"}], "groups": [{"columns": ["select", "name"], "caption": "", "hideable": false, "master": false, "span": 2}, {"columns": ["K_A_0", "K_A_1"], "caption": "K<sub>A</sub>(B)", "hideable": true, "master": false, "span": 2}, {"columns": ["K_B_00", "K_B_02", "K_B_10", "K_B_12"], "caption": "K<sub>B</sub>(A,B)", "hideable": true, "master": false, "span": 4}, {"columns": ["S_B_1_A", "S_A_1_B", "S_B_2_B"], "caption": "Sign(edge)", "hideable": true, "master": false, "span": 3}, {"columns": ["E_A", "E_B", "E_SUM"], "caption": "Indegree(component)", "hideable": true, "master": false, "span": 3}, {"columns": ["B_A", "B_B"], "caption": "Bias(component)", "hideable": true, "master": false, "span": 2}, {"columns": ["I_B_1_A", "I_A_1_B", "I_B_2_B"], "caption": "Impact(edge)", "hideable": true, "master": false, "span": 3}, {"columns": ["C_test_ts", "C_test_cycle"], "caption": "Cost(property)", "hideable": true, "master": false, "span": 2}, {"columns": ["R_test_ts", "R_test_cycle"], "caption": "Robustness(property)", "hideable": true, "master": false, "span": 2}]};