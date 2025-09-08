const arg = process.argv[2];
const value = parseInt(arg)

if (isNaN(value))
    console.log("Missing size")
else {
    for (i = 0; i < value; i++){
        let row = ''
        for (n = 0; n < value; n++){
            row += "X"
        }
        console.log(row)
    }
}