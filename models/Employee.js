var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('Employee', {
    "connector": "memory",
    "fields": {
        "RMID": {
            "type": "string",
            "required": true
        },
        "RMName": {
            "type": "string",
            "required": true
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;