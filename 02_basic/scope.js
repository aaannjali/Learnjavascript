function first(){
        const a = 50;
        second();
    const fun = function second() {
            console.log(a);

            const b = 30;
            let c = 20;
            var d = 90;
                
        }
        //console.log(b); // out of the scope so b is not defined here.
        //console.log(c); // c is not defined here
        // console.log(d);      
}
first();
