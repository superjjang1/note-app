const db = require ('../db');
console.log('accessing notes');

function getAll(){
    return db.any(`select * from notes`)

        .catch((err)=>{
            console.log("no");
            console.log(err);
        });
};


module.exports = {
    getAll
};