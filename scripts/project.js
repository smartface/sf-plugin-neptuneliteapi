var fs = require("fs");
var path = require("path");
var projectJSONPath = path.join(__dirname,"../../../../config/project.json");
var project = require(projectJSONPath);

if (!project.build.input.android.plugins.modules || !project.build.input.android.plugins.modules.neptuneliteapi) {
    project.build.input.android.plugins.modules = project.build.input.android.plugins.modules ? project.build.input.android.plugins.modules : {};
    project.build.input.android.plugins.modules.neptuneliteapi = {
        path: "plugins/Android/neptuneliteapi",
        active: true
    };
}

var output = JSON.stringify(project, null, "\t");
fs.writeFileSync(projectJSONPath, output, "utf8");