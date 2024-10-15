<!-- code snippet output  -->

<!-- a.) -->
Greetings John
hi undefined
hello Smith



<!-- b.) -->
Global EC creation:
outer:null   this: undefined
LE:{ }, TDZ{str, user} 

Global EC execution: 
outer:null   this: window
LE:{str: Greetings; user: obj }, TDZ{} 

display FEC creation: 
outer: global  this:lexical
LE:{ }, TDZ{} 

display FEC execution: 
outer:global this:lexical
LE:{display : fn }, TDZ{} 

show FEC creation: 
outer:global this:lexical
LE:{display : fn , msg : "hi"}, TDZ{} 

show FEC execution: 
outer: global this:lexical
LE: {display : fn , msg : "hello"},
TDZ{} 




