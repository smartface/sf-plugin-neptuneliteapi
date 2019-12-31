# NeptuneLiteApi Android Plugin From Smartface

Smartface NeptuneLiteApi Android plugin is a wrapper to use while developing  apps on Smartface platform. To be consider, it is just developed  for Android and doesn't perform any action with regular run-on-device scenarios.

## Installation
Smartface Firebase plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command in terminal `(cd ~/workspace/scripts && npm i -S sf-plugin-neptuneliteapi)`

## Configuration
Installation script automatically configures project.json. Please verify following records are in place.
Configuration is needed once only

**Step 1**
- This repository contains prepared android library project under `~/Native` directory. 
- Finally, specify neptuneliteapi plugin library to config/project.json.

```javascript
"plugins": {
  "modules": {
    "neptuneliteapi": {
      "path": "plugins/Android/neptuneliteapi",
      "active": true
    }
  }
},
```
**Step 2**
- Specify library project in dependencies.gradle which is located under `~/workspace/config/Android` folder. Such as;
```groovy
dependencies {
implementation project(":neptuneliteapi")
}
```


## Usage

 - [NeptuneLiteApi-Sample](https://github.com/muhammedyalcin/neptuneliteapi-sample)

## Need Help?

Please [submit an issue](https://github.com/smartface/sf-plugin-neptuneliteapi/issues) on GitHub and provide information about your problem.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)