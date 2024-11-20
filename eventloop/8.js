function run() {
    console.log(1);
    new Promise((resolve, reject) => {
        try{
            console.log(2);
            reject(3);
            return;
        }
        catch(e){
            console.log(e);
        }
        finally{
            console.log(4);
        }
        console.log(5);
        
    })
    console.log(6);
}
run();