# Implementation

This web application is design to take a picture using a browser in a mobile phone and send it as a PDF file attached via email.
 
## Backend
   
   Node js and TypeScript.
   
## Frontend 
   
   React and TypeScript   

## Email SMTP 
    
   SMTP configuration at "backend/config" needs to be set.
   Please use your (https://mailtrap.io/) account credentials in order to receive the email:
   ```bash
    "smtp": "smtp.mailtrap.io",
    "port": "587",
    "user": "",
    "password": ""
   ```

# Below Package Libraries are used:

## pdfkit
 
   It is utilized to generate PDF.

## react-html5-camera-photo 
 
   It is utilized to access a computer's camera using the browser in order to take photos.<br/>
   ***HTTP is allowed to use in localhost, however, https is needed in order to run on another domain.**

## Axios 
 
   It is utilized, which is one of the best HTTP clients for the browser and Node.js.

## express-swagger-generator**
 
   It is a package to generate swagger (OpenAPI) documentation for our Express APIs.

## celebrate 
   
    It is utilized to capture all the Runtime Exception.

## debug 
 
   It is utilized to facilitate logging in the debug environment.
   
## cross-env 
   <br>
   It is utilized in debug mode and helps to run scripts that set and use environment variables across platforms such as Windows/Linux/mac os.



## API Doc

Please find the API Docs via below:
<br/>
[http://localhost:3001/api-docs](http://localhost:3001/api-docs)

    
## Clone

Use [Git](https://git-scm.com/) to clone the project in a local machine.

```bash
git init
git clone https://github.com/HamidRezaeirad/web-camera.git
cd camera-challenge
```

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install the project.

```bash
npm install 
npm start (frontend)
npm run debug (backend)

```

## Test

Using **Jest** and **Chai**

```bash
npm run test (backend)


```

## Accessibly

Web application is accessible through below URL and port
<br/>
[http://localhost:3000](http://localhost:3000/) frontend (React)
<br/>
[http://localhost:3001](http://localhost:3001/) backend (Node.js)


## License

[MIT](https://choosealicense.com/licenses/mit/) 
