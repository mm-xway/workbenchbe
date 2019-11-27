var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('CustomerProduct', {
    "connector": "memory",
    "fields": {
        "CustomerID": {
            "type": "string",
            "required": true
        },
        "ProductID": {
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