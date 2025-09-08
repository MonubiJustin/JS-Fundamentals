let arg = process.argv[2];

value = parseInt(arg)

if (isNaN(value) === true)
    console.log("Not a number")
else
    console.log(`My number: ${value}`)

