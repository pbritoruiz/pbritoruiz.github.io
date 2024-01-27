{
    "eula": "",
    "vendor": "delaware",
    "license": "",
    "id": "com.delaware.sac.chatgptwidget",
    "version": "1.0.0",
    "name": "chatGPT for SAC",
    "newInstancePrefix": "chatGPTInSAC",
    "description": "A custom widget to integrate chatGPT3 in SAC Analytic application",
    "webcomponents": [
        {
            "kind": "main",
            "tag": "custom-widget",
            "url": "https://dmeraj.github.io/integrating-chatGPT3-in-SAC/main.js",
            "integrity": "",
            "ignoreIntegrity": true
        }
    ],
    "properties": {
        "width": {
            "type": "integer",
            "default": 400
        },
        "height": {
            "type": "integer",
            "default": 600
        },
        "chatGPTKey": {
            "type": "string",
            "default": ""
        }
    },
    "methods": {
        "setContext": {
            "description": "Add or update an existing context",
            "parameters": [
                {
                    "name": "id",
                    "type": "string",
                    "description": ""
                },
                {
                    "name": "businessName",
                    "type": "string",
                    "description": ""
                },
                {
                    "name": "data",
                    "type": "string",
                    "description": ""
                }
            ],
            "returnType": "string"
        }
    },
    "events": {}
}