define({ "api": [
  {
    "type": "post",
    "url": "/asset/:schemaID/",
    "title": "Add Asset",
    "name": "AssetCreate",
    "order": "3",
    "description": "<p>Create an asset</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "longitude",
            "description": "<p>longitude coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "latitude",
            "description": "<p>coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "altitude",
            "description": "<p>altitude coordinate</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>client ID for existing clients</p>"
          },
          {
            "group": "Body",
            "type": "client",
            "optional": true,
            "field": "client",
            "description": "<p>Optional client body for new clients</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "locationID",
            "description": "<p>location ID for existing client locations.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "zoneID",
            "description": "<p>zone ID for existing client locations.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "zone",
            "description": "<p>Creates a new zone and attaches it to the existing client location id. If there is no location, no zone will be created.</p>"
          },
          {
            "group": "Body",
            "type": "string[200]",
            "optional": true,
            "field": "char1-30",
            "description": "<p>The char column of your asset schema, refer to asset schema for char-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "int1-15",
            "description": "<p>The signed integer column of your asset schema, refer to asset schema for int-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "dbl1-7",
            "description": "<p>The double column of your asset schema, refer to asset schema for dbl-field correlation.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n    \"name\": \"New Asset\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example with new client",
          "content": "{\n    \"name\": \"New Asset\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"client\": {\n        \"billingName\": \"New Customer\",\n        \"contact\": [{\n            \"firstName\": \"Alex\",\n            \"lastName\": \"Jones\",\n            \"email\": \"alex.jones@company.net\",\n        }],\n        \"location\": [{\n            \"street1\": \"123 Street name\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        }]\n    },\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"assetID\": \"520427\",\n        \"schemaID\": \"3\",\n        \"schema\": [\n            {\n                \"title\": \"Barcode ID\",\n                \"col\": \"char1\"\n            },\n            {\n                \"title\": \"Area\",\n                \"col\": \"char2\"\n            },\n            {\n                \"title\": \"Activity Level\",\n                \"col\": \"int1\"\n            },\n            {\n                \"title\": \"Replenished (Yes/No)\",\n                \"col\": \"char3\"\n            },\n            {\n                \"title\": \"Comments\",\n                \"col\": \"char4\"\n            }\n        ],\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Asset Name.\",\n            \"number\": 520427,\n            \"description\": \"Description of asset.\",\n            \"longitude\": 6666,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Adadress Sydney 2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/:schemaID/:assetID",
    "title": "Get Asset",
    "name": "AssetGet",
    "order": "5",
    "description": "<p>Get available information about the asset.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/schema/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"assetID\": \"520427\",\n        \"schemaID\": \"3\",\n        \"schema\": [\n            {\n                \"title\": \"Barcode ID\",\n                \"col\": \"char1\"\n            },\n            {\n                \"title\": \"Area\",\n                \"col\": \"char2\"\n            },\n            {\n                \"title\": \"Activity Level\",\n                \"col\": \"int1\"\n            },\n            {\n                \"title\": \"Replenished (Yes/No)\",\n                \"col\": \"char3\"\n            },\n            {\n                \"title\": \"Comments\",\n                \"col\": \"char4\"\n            }\n        ],\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Asset Name.\",\n            \"number\": 520427,\n            \"description\": \"Description of asset.\",\n            \"longitude\": 6666,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Adadress Sydney 2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/list",
    "title": "List Assets",
    "name": "AssetList",
    "order": "2",
    "description": "<p>Retrieve a list of assets within a schema.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/schema/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": [\n        {\n            \"assetID\": \"520427\",\n            \"name\": \"Name of asset\",\n            \"description\": \"Description of asset.\",\n            \"number\": \"520427\",\n            \"schemaID\": \"3\",\n            \"date\": \"1599094442\",\n            \"latitude\": \"5556\",\n            \"longitude\": \"6666\",\n            \"clientID\": \"1\",\n            \"altitude\": \"777\",\n            \"companyName\": \"Client Name\",\n            \"address1\": \"123 Street Address\",\n            \"address2\": \"\",\n            \"city\": \"Sydney\",\n            \"postcode\": \"2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\"\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/schema/list",
    "title": "List Asset Types",
    "name": "AssetSchemaList",
    "order": "1",
    "description": "<p>Retrieve a list of asset schemas available.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/schema/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": [\n        {\n            \"id\": 3,\n            \"title\": \"Bait Station\",\n            \"columns\": [\n                {\n                    \"title\": \"ID\",\n                    \"col\": \"id\"\n                },\n                {\n                    \"title\": \"Barcode ID\",\n                    \"col\": \"char1\"\n                },\n                {\n                    \"title\": \"Area\",\n                    \"col\": \"char2\"\n                },\n                {\n                    \"title\": \"Activity Level\",\n                    \"col\": \"int1\"\n                },\n                {\n                    \"title\": \"Replenished (Yes/No)\",\n                    \"col\": \"char3\"\n                },\n                {\n                    \"title\": \"Comments\",\n                    \"col\": \"char4\"\n                }\n            ],\n            \"actions\": {\n                \"list\": \"GET https://service.formitize.com/api/rest/v2/asset/3/list\",\n                \"getAsset\": \"GET https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n\t\t\t\t\"updateAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"createAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/\"\n            }\n        },\n\t\t...\n\t]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/schema/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "post",
    "url": "/asset/:schemaID/:assetID",
    "title": "Edit Asset",
    "name": "AssetUpdate",
    "order": "4",
    "description": "<p>Update an existing asset.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>description of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "longitude",
            "description": "<p>longitude coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "latitude",
            "description": "<p>coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "altitude",
            "description": "<p>altitude coordinate</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>client ID for existing clients</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "locationID",
            "description": "<p>location ID for existing client locations.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "zoneID",
            "description": "<p>zone ID for existing client locations.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "zone",
            "description": "<p>Creates a new zone and attaches it to the existing client location id. If there is no location, no zone will be created.</p>"
          },
          {
            "group": "Body",
            "type": "client",
            "optional": true,
            "field": "client",
            "description": "<p>Optional client body for new clients</p>"
          },
          {
            "group": "Body",
            "type": "string[200]",
            "optional": true,
            "field": "char1-30",
            "description": "<p>The char column of your asset schema, refer to asset schema for char-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "int1-15",
            "description": "<p>The signed integer column of your asset schema, refer to asset schema for int-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "dbl1-7",
            "description": "<p>The double column of your asset schema, refer to asset schema for dbl-field correlation.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n    \"name\": \"Updated Asset Name\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example with new client:",
          "content": "{\n    \"name\": \"Updated Asset Name\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"client\": {\n        \"billingName\": \"New Customer\",\n        \"contact\": [{\n            \"firstName\": \"Alex\",\n            \"lastName\": \"Jones\",\n            \"email\": \"alex.jones@company.net\",\n        }],\n        \"location\": [{\n            \"street1\": \"123 Street name\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        }]\n    },\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"assetID\": \"520427\",\n        \"schemaID\": \"3\",\n        \"schema\": [\n            {\n                \"title\": \"Barcode ID\",\n                \"col\": \"char1\"\n            },\n            {\n                \"title\": \"Area\",\n                \"col\": \"char2\"\n            },\n            {\n                \"title\": \"Activity Level\",\n                \"col\": \"int1\"\n            },\n            {\n                \"title\": \"Replenished (Yes/No)\",\n                \"col\": \"char3\"\n            },\n            {\n                \"title\": \"Comments\",\n                \"col\": \"char4\"\n            }\n        ],\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Updated Asset Name\",\n            \"number\": 520427,\n            \"description\": \"Description of asset.\",\n            \"longitude\": 6666,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Adadress Sydney 2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\"\n        },\n        \"fieldsUpdated\": {\n            \"name\": \"Updated Asset Name\",\n            \"description\": \"desc\",\n            \"longitude\": \"6666\"\n        },\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "all",
    "url": "/",
    "title": "",
    "description": "<p>Each request needs these headers to be sent.</p>",
    "version": "1.0.0",
    "group": "Authorisation",
    "filename": "app/system/class/api/rest/_apidoc.js",
    "order": "All",
    "groupTitle": "Authorisation",
    "name": "All",
    "header": {
      "fields": {
        "CURL Authorisation": [
          {
            "group": "CURL Authorisation",
            "type": "String",
            "optional": false,
            "field": "--user-agent",
            "description": "<p>This is the company login name used on Formiitze e.g. &quot;Formitize&quot;</p>"
          },
          {
            "group": "CURL Authorisation",
            "type": "String",
            "optional": false,
            "field": "--u",
            "description": "<p>This will be the user:password b64 encrypted e.g. Username123:password123</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CURL Example",
          "content": "curl -A YourCompany -u admin:password https://service.formitize.com/api/rest/v2/",
          "type": "curl"
        },
        {
          "title": "C# Example",
          "content": "using Formitize.API;\n\nvar credentials = new Credentials(\"CompanyName\", \"Username\", \"password\");\nvar client = new WebClient(credentials)",
          "type": "CSharp"
        },
        {
          "title": "PHP Example",
          "content": "require '../api/Formitize/autoload.inc.php';\n\n$cred = Formitize\\API::CreateCredentials();\n\n$client = Formitize\\API::RESTClient($cred);\n\n$cred->setCompanyName(USER_COMPANY);\n$cred->setUserName(USER_NAME);\n$cred->setPassword(USER_PW);",
          "type": "PHP"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Authorisation Errors",
          "content": "{\"payload\":{\"error\": {\"message\": \"Username does not exist.\", \"timestamp\": 1521691072, \"code\": 401}}}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/database/list",
    "title": "List Lookup Databases",
    "name": "DatabaseList",
    "description": "<p>Retrieve a list of tables and the available columns.</p>",
    "group": "Database",
    "order": "1",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/database/list/",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": "var client = new WebClient(Helper.createCredentials());\nvar job = new Formitize.API.Response.JobRequest();\n\nvar APIResponse = await FormitizeHelper.Database.GetDatabaseList(client);",
        "type": "CSharp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t...,\n\t\t\"128876\": {\n\t\t\t\"id\": \"128876\",\n\t\t\t\"name\": \"database_test\",\n\t\t\t\"title\": \"\",\n\t\t\t\"dateModified\": \"1590392617\",\n\t\t\t\"storeOnPhone\": \"1\",\n\t\t\t\"columns\": [\n\t\t\t\t\"id\",\n\t\t\t\t\"ColumnA\",\n\t\t\t\t\"ColumnB\",\n\t\t\t\t\"ColumnC\"\n\t\t\t],\n\t\t\t\"url\": \"https://service.formitize.com/api/rest/v2/database/example_table\"\t\t\t\n\t\t},\n\t\t...\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "post",
    "url": "/database/:tablename",
    "title": "Bulk Write/Update Data",
    "name": "DatabasePost",
    "order": "2",
    "description": "<p>Create or Update entries within a table.</p>",
    "group": "Database",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "json",
            "optional": false,
            "field": "payload",
            "description": "<p>An array of dictionary entries that match up to the available columns of your table.</p>"
          },
          {
            "group": "Body",
            "type": "json",
            "optional": false,
            "field": "pk",
            "description": "<p>Optional, list of primary keys used to match content when insert/updating values.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request Body Example:",
        "content": "{\n    \"payload\": [\n\t\t{\n        \t\"ColumnA\": \"111\",\n        \t\"ColumnB\": \"222\",\n        \t\"ColumnC\": \"333\"\n\t    },\n    \t{\n        \t\"ColumnA\": \"aaaa\",\n        \t\"ColumnC\": \"cccc\",\n\t\t}\n\t],\n    \"pk\": [\n        \"ColumnA\"\n    ]\n}",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": "var client = new WebClient(Helper.createCredentials());\nvar job = new Formitize.API.Response.JobRequest();\n\n//Any values matching ColumnA will update, if not found will insert.\nvar primaryKeys = new List<string>() { \"ColumnA\" };\nvar entries = new List<Entry>() {\n\tnew Entry() {\n\t\tContent = {\n\t\t\t[\"ColumnA\"] = \"Value 1\",\n\t\t\t[\"ColumnB\"] = \"Value 2\",\n\t\t\t[\"ColumnC\"] = \"Value 3\"\n\t\t}\n\t},\n\tnew Entry() {\n\t\tContent = {\n\t\t\t[\"ColumnA\"] = \"Person A\",\n\t\t\t[\"ColumnB\"] = \"some description\",\n\t\t\t[\"ColumnC\"] = \"some other value\"\n\t\t}\n\t},\n};\n\nvar APIResponse = await FormitizeHelper.Database.BulkWrite(client, \"database_test\", entries, primaryKeys );",
        "type": "CSharp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Body Example Response:",
          "content": "{\n\t\"payload\": {\n\t\t\"result\": \"success\",\n\t\t\"note\": \"Import service spawned.\",\n\t\t\"serviceID\": \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/form/list",
    "title": "List Templates",
    "name": "FormTemplate",
    "order": "1",
    "version": "1.0.0",
    "group": "Form_Templates",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "Boolean",
            "optional": false,
            "field": "simple",
            "description": "<p>If true, only returns a list of objects with no form-schema data.</p>"
          },
          {
            "group": "Optional",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>If a form ID is known, then return information about that form.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/list",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response (simple)",
          "content": "{\n\t\"payload\": {\n\t\t\"1\": {\n\t\t\t\"formID\": \"1\",\n\t\t\t\"title\": \"Assets\"\n\t\t},\n\t\t\"35624\": {\n\t\t\t\"formID\": \"35624\",\n\t\t\t\"title\": \"Sample Form\"\n\t\t},\n\t\t\"35634\": {\n\t\t\t\"formID\": \"35634\",\n\t\t\t\"title\": \"Client Questionaire\"\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Response (with form schema)",
          "content": "\n{\n\t\"payload\": {\n\t\t\"1\": {\n\t\t\t\"formID\": \"1\",\n\t\t\t\"title\": \"Assets\",\n\t\t\t\"elements\": {\n\t\t\t\t\"formSubheader_1\": {\n\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\"register_1\": {\n\t\t\t\t\t\t\t\"name\": \"register_1\",\n\t\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formRow_1\": {\n\t\t\t\t\t\t\t\"name\": \"formRow_1\",\n\t\t\t\t\t\t\t\"type\": \"formRow\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formAsset_2\": {\n\t\t\t\t\t\t\t\"name\": \"formAsset_2\",\n\t\t\t\t\t\t\t\"type\": \"formAsset\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formGPS_1\": {\n\t\t\t\t\t\t\t\"name\": \"formGPS_1\",\n\t\t\t\t\t\t\t\"type\": \"formGPS\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formCRM_1\": {\n\t\t\t\t\t\t\t\"name\": \"formCRM_1\",\n\t\t\t\t\t\t\t\"type\": \"formCRM\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_5\": {\n\t\t\t\t\t\t\t\"name\": \"formText_5\",\n\t\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_6\": {\n\t\t\t\t\t\t\t\"name\": \"formText_6\",\n\t\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formPageSplit_1\": {\n\t\t\t\t\t\t\t\"name\": \"formPageSplit_1\",\n\t\t\t\t\t\t\t\"type\": \"formPageSplit\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_1\": {\n\t\t\t\t\t\t\t\"name\": \"formText_1\",\n\t\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formCRMLocation_1\": {\n\t\t\t\t\t\t\t\"name\": \"formCRMLocation_1\",\n\t\t\t\t\t\t\t\"type\": \"formCRMLocation\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_7\": {\n\t\t\t\t\t\t\t\"name\": \"formText_7\",\n\t\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.js",
    "groupTitle": "Form_Templates"
  },
  {
    "type": "get",
    "url": "/form/:id",
    "title": "Get Form Template",
    "name": "FormTemplateID",
    "group": "Form_Templates",
    "version": "1.0.0",
    "order": "2",
    "parameter": {
      "fields": {
        "Arguements": [
          {
            "group": "Arguements",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Return information about that form template.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/55",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"formID\": \"35634\",\n\t\t\"title\": \"UPPERCASE_TEST\",\n\t\t\"elements\": {\n\t\t\t\"formSubheader_1\": {\n\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\"children\": {\n\t\t\t\t\t\"formText_1\": {\n\t\t\t\t\t\t\"name\": \"formText_1\",\n\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t},\n\t\t\t\t\t\"formText_2\": {\n\t\t\t\t\t\t\"name\": \"formText_2\",\n\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t},\n\t\t\t\t\t\"formText_3\": {\n\t\t\t\t\t\t\"name\": \"formText_3\",\n\t\t\t\t\t\t\"type\": \"formText\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.js",
    "groupTitle": "Form_Templates"
  },
  {
    "type": "delete",
    "url": "/job/:id",
    "title": "Delete Job",
    "name": "DeleteJob",
    "order": "4",
    "group": "Job",
    "version": "1.0.0",
    "description": "<p>Delete the job by id.</p>",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/job/1",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": "var deleteTask = Formitize.API.Helper.Jobs.DeleteJob(client, 555);\nvar deleteResponse = deleteTask.Result;",
        "type": "CSharp"
      }
    ],
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/job/",
    "title": "List jobs",
    "name": "GetJob",
    "order": "1",
    "group": "Job",
    "version": "1.0.0",
    "description": "<p>Get a list of jobs.</p>",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password https://service.formitize.com/api/rest/v2/job/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n \"payload\": {\n     \"5555\": {\n         \"id\": \"5555\",\n         \"maintenanceID\": \"0\",\n         \"jobNumber\": \"\",\n         \"orderNumber\": \"\",\n         \"title\": \"Person A\",\n         \"forms\": {\n             \"2932\": {\n                 \"id\": \"2932\",\n                 \"title\": \"Features Test\"\n             }\n         },\n         \"location\": \"123 Street\",\n         \"description\": \"\",\n         \"dueDate\": \"1417139760\",\n         \"assignedTo\": \"2251\",\n         \"priority\": \"0\",\n         \"status\": \"4\",\n         \"duration\": \"3600\",\n         \"statusLabel\": \"Completed\"\n     }\n }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/job/:id",
    "title": "Edit Job",
    "name": "PostEditJob",
    "order": "3",
    "version": "1.0.0",
    "group": "Job",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Job Title.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "jobNumber",
            "description": "<p>The Job Number.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "orderNumber",
            "description": "<p>The Order Number of the job</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "dueDate",
            "description": "<p>The date represented in unix timestamp (no-milliseconds)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "defaultValue": "60",
            "description": "<p>The number of minutes a job will run for.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Any notes attached to this job, to be viewed by the Technician.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>Location this job is at.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>The user agent this job will be assigned to. Can either be the User ID or UserNane.</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "sendNotification",
            "defaultValue": "true",
            "description": "<p>Sends a ping to the users mobile device if notifications are available.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "Low",
              "Normal",
              "Medium",
              "High",
              "Urgent"
            ],
            "optional": true,
            "field": "priority",
            "description": "<p>The priority or 'importance' of this job.</p>"
          },
          {
            "group": "Body",
            "type": "Number[]",
            "optional": true,
            "field": "form",
            "description": "<p>The form IDs attached to this job.</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "formData",
            "description": "<p>The content of the form.</p>"
          }
        ],
        "Delivery Fields": [
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryLocation",
            "description": "<p>If this is a delivery job, where is the drop-off location.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "siteName",
            "description": "<p>The delivery location site name.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryContact",
            "description": "<p>The contact person to be delivered to.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryPhone",
            "description": "<p>The contact's phone number.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryNotes",
            "description": "<p>Any notes specific to the delivery.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "Number",
            "optional": true,
            "field": "deliveryDate",
            "description": "<p>Unixtimestamp(no-ms) of the delivery date/time.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n\t\"id\": 0,\n\t\"title\": \"Job Title\",\n\t\"agent\": \"YourUser\",\n\t\"location\": \"123 Fake St, Suburb, Country\",\n\t\"client\": {\n\t\t\"id\": 0,\n\t\t\"billingName\": \"Test client\",\n\t\t\"contact\": [{\n\t\t\t\"firstName\": \"John\",\n\t\t\t\"lastName\": \"Doe\",\n\t\t\t\"email\": \"john@site.com\",\n\t\t\t\"mobile\": \"0000 000 000\",\n\t\t\t\"mobileAreaCode\": \"+61\",\n\t\t\t\"custom\": {\n\t\t\t\t\"Instagram\": {\"value\": \"@john.doe\", \"type\": \"Text\"},\n\t\t\t\t\"Facebook\": {\"value\": \"@john.doe\", \"type\": \"Text\"},\n\t\t\t}\n\t\t}, \n\t\t{ ... }],\n\t\t\"location\": [{\n\t\t\t\"street1\": \"123 Fake St\",\n\t\t\t\"street2\": \"\",\n\t\t\t\"city\": \"Some city\",\n\t\t\t\"state\": \"Some state\",\n\t\t\t\"postcode\": \"Some postcode\",\n\t\t\t\"country\": \"Some country\"\n\t\t}, \n\t\t{ ... }]\n\t},\n\t\"formData\": {\n\t\t444: {\n\t\t\t\"formText\": \"Test\"\n\t\t\t\"formMultiple\": [ \"Answer1\", \"Answer2\", \"Answer3\" ],\n\t\t\t\"aRepeatedText\": [\"Value1\", \"Value2\", \"Value3\"],\n\t\t\t\"formTextInARepeatableTableRow\": { \"0_1\": \"Test1\", \"0_2\": \"Test2\" ,\"1_1\": \"Test3\", \"1_2\": \"Test4\" }\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "C# Example",
          "content": "var job = new Formitize.API.Model.Job();\n\njob.Title = \"Test\";\njob.Agent = \"-1\"; //Assign to Queue (Taxi-Rank style) - Job is free-for-all to pick up by any agent.\njob.Client.BillingName = \"Test\";\n\nvar contact = new Formitize.API.Model.Contact();\ncontact.FirstName = \"FIRST_NAME\";\ncontact.LastName = \"LAST_NAME\";\ncontact.Mobile = \"0000 000 000\";\ncontact.Email = \"test@test.com\";\njob.Client.ContactList.Add(contact);\n\nvar form = new Formitize.API.Model.JobFormData();\nform.FormID = 10355;\nform.SetValue(\"0\", \"clientName\", \"Test Client\")\n  .SetValue(\"0\", \"clientEmail\", \"test@test.com\")\n  .SetValue(\"0\", \"businessType\", \"Option A\");\n\njob.AttachJobForm(form);\n\ntask = FormitizeHelper.Jobs.PostJob(client, job);\nvar APIResponse =  task.Result;",
          "type": "CSharp"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Payload object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.jobID",
            "description": "<p>ID of the new created/updaetd job.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.agentID",
            "description": "<p>ID of the agent assigned to the job.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"payload\": {\n     \"jobID\": 7,\n     \"agentID\": 1,\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.job.edit.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/job/",
    "title": "Add Job",
    "name": "PostJob",
    "order": "2",
    "version": "1.0.0",
    "group": "Job",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Job Title.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "jobNumber",
            "description": "<p>The Job Number.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "orderNumber",
            "description": "<p>The Order Number of the job</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "dueDate",
            "description": "<p>The date represented in unix timestamp (no-milliseconds)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "defaultValue": "60",
            "description": "<p>The number of minutes a job will run for.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Any notes attached to this job, to be viewed by the Technician.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>Location this job is at.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>The user agent this job will be assigned to. Can either be the User ID or UserNane.</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "sendNotification",
            "defaultValue": "true",
            "description": "<p>Sends a ping to the users mobile device if notifications are available.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "Low",
              "Normal",
              "Medium",
              "High",
              "Urgent"
            ],
            "optional": true,
            "field": "priority",
            "description": "<p>The priority or 'importance' of this job.</p>"
          },
          {
            "group": "Body",
            "type": "Number[]",
            "optional": true,
            "field": "form",
            "description": "<p>The form IDs attached to this job.</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "formData",
            "description": "<p>The content of the form.</p>"
          }
        ],
        "Delivery Fields": [
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryLocation",
            "description": "<p>If this is a delivery job, where is the drop-off location.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "siteName",
            "description": "<p>The delivery location site name.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryContact",
            "description": "<p>The contact person to be delivered to.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryPhone",
            "description": "<p>The contact's phone number.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "String",
            "optional": true,
            "field": "deliveryNotes",
            "description": "<p>Any notes specific to the delivery.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "Number",
            "optional": true,
            "field": "deliveryDate",
            "description": "<p>Unixtimestamp(no-ms) of the delivery date/time.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "Object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "Number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "String",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n\t\"id\": 0,\n\t\"title\": \"Job Title\",\n\t\"agent\": \"YourUser\",\n\t\"location\": \"123 Fake St, Suburb, Country\",\n\t\"client\": {\n\t\t\"id\": 0,\n\t\t\"billingName\": \"Test client\",\n\t\t\"contact\": [{\n\t\t\t\"firstName\": \"John\",\n\t\t\t\"lastName\": \"Doe\",\n\t\t\t\"email\": \"john@site.com\",\n\t\t\t\"mobile\": \"0000 000 000\",\n\t\t\t\"mobileAreaCode\": \"+61\",\n\t\t\t\"custom\": {\n\t\t\t\t\"Instagram\": {\"value\": \"@john.doe\", \"type\": \"Text\"},\n\t\t\t\t\"Facebook\": {\"value\": \"@john.doe\", \"type\": \"Text\"},\n\t\t\t}\n\t\t}, \n\t\t{ ... }],\n\t\t\"location\": [{\n\t\t\t\"street1\": \"123 Fake St\",\n\t\t\t\"street2\": \"\",\n\t\t\t\"city\": \"Some city\",\n\t\t\t\"state\": \"Some state\",\n\t\t\t\"postcode\": \"Some postcode\",\n\t\t\t\"country\": \"Some country\"\n\t\t}, \n\t\t{ ... }]\n\t},\n\t\"formData\": {\n\t\t444: {\n\t\t\t\"formText\": \"Test\"\n\t\t\t\"formMultiple\": [ \"Answer1\", \"Answer2\", \"Answer3\" ],\n\t\t\t\"aRepeatedText\": [\"Value1\", \"Value2\", \"Value3\"],\n\t\t\t\"formTextInARepeatableTableRow\": { \"0_1\": \"Test1\", \"0_2\": \"Test2\" ,\"1_1\": \"Test3\", \"1_2\": \"Test4\" }\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "C# Example",
          "content": "var job = new Formitize.API.Model.Job();\n\njob.Title = \"Test\";\njob.Agent = \"-1\"; //Assign to Queue (Taxi-Rank style) - Job is free-for-all to pick up by any agent.\njob.Client.BillingName = \"Test\";\n\nvar contact = new Formitize.API.Model.Contact();\ncontact.FirstName = \"FIRST_NAME\";\ncontact.LastName = \"LAST_NAME\";\ncontact.Mobile = \"0000 000 000\";\ncontact.Email = \"test@test.com\";\njob.Client.ContactList.Add(contact);\n\nvar form = new Formitize.API.Model.JobFormData();\nform.FormID = 10355;\nform.SetValue(\"0\", \"clientName\", \"Test Client\")\n  .SetValue(\"0\", \"clientEmail\", \"test@test.com\")\n  .SetValue(\"0\", \"businessType\", \"Option A\");\n\njob.AttachJobForm(form);\n\ntask = FormitizeHelper.Jobs.PostJob(client, job);\nvar APIResponse =  task.Result;",
          "type": "CSharp"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Payload object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.jobID",
            "description": "<p>ID of the new created/updaetd job.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.agentID",
            "description": "<p>ID of the agent assigned to the job.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"payload\": {\n     \"jobID\": 7,\n     \"agentID\": 1,\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/form/submit/:id",
    "title": "Get Submitted Form",
    "name": "SubmittedGetID",
    "group": "Submitted_Forms",
    "order": "2",
    "version": "1.0.0",
    "description": "<p>Returns the submitted form.</p>",
    "parameter": {
      "fields": {
        "Arguments": [
          {
            "group": "Arguments",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the submitted form.</p>"
          }
        ],
        "Optional": [
          {
            "group": "Optional",
            "type": "Boolean",
            "optional": false,
            "field": "simple",
            "description": "<p>Submitted form data format is simplified if true.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/submit/88",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"userID\": \"20150\",\n\t\t\"userName\": \"admin\",\n\t\t\"count\": \"4\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"latitude\": false,\n\t\t\"longitude\": false,\n\t\t\"location\": false,\n\t\t\"content\": {\n\t\t\t\"formSubheader_1\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"id\": 31,\n\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\"signed\": {\n\t\t\t\t\t\t\t\"id\": 44,\n\t\t\t\t\t\t\t\"type\": \"formSignature\",\n\t\t\t\t\t\t\t\"name\": \"signed\",\n\t\t\t\t\t\t\t\"image\": \"https://url/\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"signedDate\": {\n\t\t\t\t\t\t\t\"id\": 45,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"signedDate\",\n\t\t\t\t\t\t\t\"value\": \"\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"totalPayable\": {\n\t\t\t\t\t\t\t\"id\": 46,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"totalPayable\",\n\t\t\t\t\t\t\t\"value\": \"1231\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"PaymentMethod\": {\n\t\t\t\t\t\t\t\"id\": 53,\n\t\t\t\t\t\t\t\"type\": \"formMultiple\",\n\t\t\t\t\t\t\t\"name\": \"PaymentMethod\",\n\t\t\t\t\t\t\t\"value\": {\n\t\t\t\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"sendEmail\": {\n\t\t\t\t\t\t\t\"id\": 65,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"sendEmail\",\n\t\t\t\t\t\t\t\"value\": \"support@formitize.com\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Respose using Simple mode",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"userID\": \"20150\",\n\t\t\"userName\": \"admin\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"latitude\": false,\n\t\t\"longitude\": false,\n\t\t\"location\": false,\n\t\t\"content\": {\n\t\t\t\"signed\": {\n\t\t\t\t\"0\": \"https://UrlToImage/\"\n\t\t\t},\n\t\t\t\"signedDate\": {\n\t\t\t\t\"0\": \"\"\n\t\t\t},\n\t\t\t\"totalPayable\": {\n\t\t\t\t\"0\": \"1231\"\n\t\t\t},\n\t\t\t\"Description of work\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Custom\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"formCheckbox_4\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"No Risks Identified\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"PaymentMethod\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"sendEmail\": {\n\t\t\t\t\"0\": \"dimitri@formitize.com\"\n\t\t\t},\n\t\t\t\"Treatment time\": {\n\t\t\t\t\"0\": \"1:00 AM\"\n\t\t\t}\n\t\t},\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "CURL"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.submit.js",
    "groupTitle": "Submitted_Forms"
  },
  {
    "type": "get",
    "url": "/form/submit/list",
    "title": "List Submitted Forms",
    "name": "SubmittedList",
    "order": "1",
    "group": "Submitted_Forms",
    "version": "1.0.0",
    "description": "<p>Returns a list of submitted forms. Limited to 200 per page.</p>",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Searches submitted forms for the title.</p>"
          },
          {
            "group": "Optional",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Returns the results for x page. Defaults to 1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/submit/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"3\": {\n\t\t\t\"submittedFormID\": 3,\n\t\t\t\"title\": \"Assets\",\n\t\t\t\"formID\": 1,\n\t\t\t\"userID\": 20150,\n\t\t\t\"jobID\": 1,\n\t\t\t\"dateCreated\": 1543276384,\n\t\t\t\"dateModified\": 1554265832\n\t\t},\n\t\t\"4\": {\n\t\t\t\"submittedFormID\": 4,\n\t\t\t\"title\": \"New Job - Assets\",\n\t\t\t\"formID\": 1,\n\t\t\t\"userID\": 20150,\n\t\t\t\"jobID\": 3,\n\t\t\t\"dateCreated\": 1543537388,\n\t\t\t\"dateModified\": 1546819983\n\t\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.submit.js",
    "groupTitle": "Submitted_Forms"
  }
] });
