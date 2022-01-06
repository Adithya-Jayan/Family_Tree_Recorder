// Temporary values to simulate saved data
let numNodes = 3;
let connections = [{start:0,end:1}]

let connectionLines = []

//Spawn new nodes on click script
var addNode = function(i){
    var ok = true;
 
    if (ok === true) {
        var original = document.getElementsByClassName('nodeBox')[0];
        var clone = original.cloneNode(true);

        if(typeof(i) != undefined){
            clone.id = "node_" + i; 
        }

        clone.style.transform = "translate(0px, 0px)";
        console.log("cloning");

        document.getElementsByClassName('workArea')[0].appendChild(clone);
        
        //make newly added node draggable
        new PlainDraggable(clone,
            {
            onMove: function() { line.position(); }
            }
            );

        return clone;
    }
 }
 
 
 // Initializes and creates nodes in memory
 function initNodes(){

    //Spawn them
    for(let i=0; i< numNodes ;i++){
        addNode(i);
     }


    //Make spawned nodes dragable
    node_list = document.getElementsByClassName('nodeBox');
    for (let i=0; i< node_list.length; i++)
    {
        new PlainDraggable(node_list[i], 
            {
            onMove: function() { connectNodes(i); }
            }
            );
    }
 }

// Connects nodes in memory
 function connectNodes(){
    for(let i =0; i< connections.length; i++){
        a = document.getElementById('node_'+connections[i].start);
        b = document.getElementById('node_'+connections[i].end);
        connectionLines[i] = new LeaderLine(a,b);
    }
 }

 //Updates connection Lines
 function updateLines(num){
    for(let i=0; i <connections.length;i++)
    {
        if((connectNodes[i].start == i) || (connectNodes[i].end == i))
        {
            connectionLines[i].position();
        }
    }
 }



 //Main function
 window.addEventListener('load', function() { 

    initNodes();
    connectNodes();

    line = new LeaderLine(
        document.getElementById('e1'),
        document.getElementById('e2')
      );

  });


document.getElementById("addNewNode").addEventListener('click', addNode);

