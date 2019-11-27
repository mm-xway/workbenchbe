var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('Product', {
    "connector": "memory",
    "fields": {
        "Name": {
            "type": "string",
            "required": true
        },
        "Type": {
            "type": "string"
        },
        "Description": {
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