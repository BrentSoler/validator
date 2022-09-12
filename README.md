
# Validnode

A lightweight object validator for node


## Install
```bash
  npm install validnode
```


## Get Started

#### Initialize

```javascript
import Validnode from "validnode"

const obj = {
    name:"validnode",
    password:"validnode123"
}

const validator = new Validnode(obj)
```

|  Parameter | Type     | Description  |         
| :-------- | :------- | :--------- |
|  *`obj` | `Object` |  Your object you want to validate |



### Validating

#### Validnode.register(fields) 
Firstly we need to regiter the fields we want to validate


```javascript
validator.register(["name","password"]);
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  *`fields`      | `string or Array<string>` | fields we want to validate |

*required
# 
#### Validnode.validate(msg?,options?) 
Then we can now validate our object 


```javascript
validator.validate();
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  `msg`      | `string` | The Error message you want to display|
|  `options`      | `Object` | options you can pass inside of validate |

*required

if a field that you have registered is not present in the object or is null or undefined it will throw an Error

note: you didn't specify an option it will run the normal validation

# 
#### options.mode
mode is a required field if you choose to have options inside of validate
#### Normal
```javascript
// will check every field you had registered in the validator
validator.validate("", {mode:"normal"}); 
```
#### Partial
```javascript
/*
 will check every field but will only throw an error 
 if there are more undefined objects than the requiredPartial
 you need to provide a requiredPartial if you to check partially
*/
validator.validate("", {mode:"partial", requiredPartial:1});
```
#### Specific
```javascript
/*
 will check the specific key you have provided inside the specificKey
 note: you dont need to register the key you want to specify 
*/
validator.validate("", {mode:"specific", specificKey:"name"}); 
```

## Usage/Examples

#### Express
Here's an example how you can use Validnode in an express app
```javascript
import Validnode from 'validnode'


app.get("/login",(req,res)=>{

  const validator = new Validnode(req.body)
  validator.register(["username","password"])

  validator.validate();

  // login logic

  res.status(200).json({msg:"Success"})

})

```


## License

[MIT](https://choosealicense.com/licenses/mit/)

