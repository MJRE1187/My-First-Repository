const yargs = require('yargs');

var argv = yargs
    .options({a:{
        demand : true,
        alias : 'address',
        string : true
    }})
.help()
.argv.a;


var somepromise = (input) => {
    var inputType = typeof input;
    return new Promise((resolve , reject) => {
        if(inputType === 'number'){
            resolve(input * input);
        }else if(inputType === 'string'){
            resolve('your input data is : ' + input);
        }else {
            reject('the input data is not acceptable :(');
        }
    });
}

somepromise(true).then((result) => {
    if(typeof argv === 'boolean'){
        throw new Error('Not acceptable input. sorry :((');
    }
    console.log(result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});