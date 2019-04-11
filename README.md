## API-First Workshop - Frontend app

### About this repo
This repo is the code for frontend app that we created as part of a api-first workshop exercise. 

### Install 
```
npm install
```

### Generate SDK based on openAPI Spec
```

openapi-generator generate -g typescript-angular --additional-properties=prependFormOrBodyParameters=true,ngVersion=7.0.0 -o ./src/app/rest -i ./api-code-gen/todolist.yaml


```

### Connect to backend app/mock server
#### 1.) update const API_URL variable in environment.ts 


### Browse app
```
ionic serve
```

