const EventEmitter = require('events');  //importing the event module and creating an instance jof the EventEmitter class

const myEmitter = new EventEmitter();  // create an instance of the EventEmitter class.


//on method is used to register an event
myEmitter.on('firstevent', (arg1 , arg2)=>{
    //event handler logic
    console.log('event occured with arguments:' ,arg1 , arg2);
});


//emit method triggers an event.all registered listeners for that event will execute

myEmitter.emit("firstevent",'hello','hi');
myEmitter.emit("firstevent",'hello','hi');


//once method register a listener that will be called only once for a specific event
myEmitter.once('firstevent',(arg1,arg2)=>{
    console.log('this listener will be executed only once.');
});


for (var i =0;i<3;i++){
    myEmitter.emit("firstevent",'hello','hi');
}


//removing the event listener
    const eventHandler = (arg1,arg2)=>{
        console.log('event occured with arguments: ',arg1,arg2);
    }
    myEmitter.on('secondevent',eventHandler);
    for(let i = 0;i<=4;i++){
        myEmitter.emit('secondevent','yes','no');

        //removing the listener after the first emission
        if(i==1){
            myEmitter.removeListener('secondevent',eventHandler);
        }
    }


