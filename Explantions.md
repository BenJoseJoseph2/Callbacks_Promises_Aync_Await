async await >> promise chains >> callback hell 

Sync in Js : 

    Synchronous means the code runs in a particular sequence .

    console.log("one");
    console.log("Two");
    console.log("Three");

Async in Js : 

    code 1
    code 2
    code 3
    code 4

    In Async code , If code 2 takes more time , then parallally the next code will work .

    function Hello()
     {
    console.log("Hai");
     }

    setTimeout(Hello,2000)


    Explaination code : 

        console.log("One");
        console.log("Two");
        console.log("Three");

        function Hello(){
            console.log("Hai");
        }

        setTimeout(Hello,2000)

        console.log("Hello Ben")


Callbacks : 


        function sum(a,b){
        console.log(a+b);
        }

        function calculator(a,b,sumCallback)
        {
            sumCallback(a,b)
        }

        calculator(5,10,sum)
