# LibreHealth Radiology Open Web App

This is the new UI for LibreHealth Radiology Module. It's an open web app. 

## Setup

### Prerequisite 

To make use of this code you need the following setup

#### Server

* You need to have a server running LibreHealth Toolkit at least version 2.0 with 
   
   * OpenMRS Open Web Apps Module
   * OpenMRS REST Module
   * Latest Radiology Module
   
    You can get the OpenMRS modules from the [OpenMRS Modules Repository](https://modules.openmrs.org/). The latest version of these modules should work fine. 
    
    The radiology module has not had any release so you'd have to build the the development version. See [LibreHealth Radiology Wiki](https://gitlab.com/librehealth/lh-radiology/wikis/home)

#### Tools
* This project uses Angular CLI which has dependencies on Node 6.9.0 or higher, together with NPM 3 or higher. See their respective docs on how to install them.

* Install Angular CLI

  `npm install -g @angular/cli`


### Get the code

`git clone https://github.com/ivange94/lh-radiology-owa`

### Install dependencies

`cd lh-radiology-owa`

`npm install`

### Build

To build your app run

`ng build`

**NOTE** ng NOT npm. You install dependencies using npm but to build you have to use the Angular CLI command `ng build`

### Package App

The Open Web Apps Module expects a .zip file with all the resources needed for the app and a manifest.webapp configuration file at the root of the zip file. When you did `ng build` a /dist folder was created at the root of the project, that is
 
 `lh-radiology-owa/dist`
 
 All you need do is package this dist folder as a .zip file and upload it to your Toolkit server.
 
##### Procedure
    
`cd dist`
    
`jar -cf radiology.zip .`
    
That generates a radiology.zip file inside your `lh-radiology-owa/dist` folder.

### Deploy App

To deploy your app, make sure you have a server running with the requirements stated above.

Go to Administration section and unver Open Web Apps Module click Manage Apps and you'll see a section to upload select and upload an app.

![ManageApps](http://picpaste.com/pics/upload_app-DhdEpxYt.1503006648.png)

Click browse and select radiology.zip then click upload.

If your app is uploaded successfully you'll see an entry for it under the uploaded apps

![LibreHealth Radiology App](http://picpaste.com/pics/Screen_Shot_2017-08-17_at_10.54.17_PM-urDjANia.1503006923.png)

Click on your app to use it

![Radiology Dashboard](http://picpaste.com/pics/Screen_Shot_2017-08-17_at_10.56.46_PM-sfYrpxq9.1503007068.png)

## Contributing

Coming soon...
