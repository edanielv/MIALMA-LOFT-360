var APP_DATA = {
  "scenes": [
    {
      "id": "0-recibidor-360",
      "name": "RECIBIDOR-360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.20943936738190416,
        "pitch": 0.022262558222456263,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.019734733155440054,
          "pitch": 0.24700419162772747,
          "rotation": 0,
          "target": "1-saln-360"
        },
        {
          "yaw": 1.7343201737633622,
          "pitch": 0.5227007692984351,
          "rotation": 1.5707963267948966,
          "target": "3-despacho-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln-360",
      "name": "SALÓN-360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04698815847393689,
        "pitch": 0.16697354499971162,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.6037026859969181,
          "pitch": 0.3599818738519165,
          "rotation": 0,
          "target": "2-dormitorio-360"
        },
        {
          "yaw": 2.8676725644376697,
          "pitch": 0.25469567346537403,
          "rotation": 0,
          "target": "0-recibidor-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio-360",
      "name": "DORMITORIO-360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.41216621566328904,
        "pitch": 0.26715940721722475,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.7619470622325952,
          "pitch": 0.44070904998692484,
          "rotation": 7.0685834705770345,
          "target": "1-saln-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-despacho-360",
      "name": "DESPACHO-360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.26851219261451575,
        "pitch": 0.25046108197682315,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.7962854706279661,
          "pitch": 0.465704232963974,
          "rotation": 4.71238898038469,
          "target": "0-recibidor-360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MIALMA-LOFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
