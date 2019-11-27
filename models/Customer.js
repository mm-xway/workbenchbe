var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('Customer', {
    "connector": "memory",
    "fields": {
        "CustomerID": {
            "type": "string",
            "required": true
        },
        "RMID": {
            "type": "string"
        },
        "Name": {
            "type": "string",
            "required": true
        },
        "Country": {
            "type": "string"
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