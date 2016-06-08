var octo = require('@octopusdeploy/octopackjs');
octo.pack('zip')
  .append('dist/index.html')
  .append('dist/static/')
  .toFile('./dist', function (err, data) {
    console.log("Package Saved: "+ data.name);
  });

  