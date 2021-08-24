const args = process.argv.slice(2);
if(args.length === 0){
  return;
}
for(let arg of args){
    arg = Number(arg);
    if(arg > -1 && typeof arg === "number"){
    let time = arg * 1000
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(arg, "seconds");
    }, time)
  }
}
