// Temporary values to simulate saved data
let numNodes = 3;
let connections = [{start:0,end:1}]

let connectionLines = []

//Spawn new nodes on click script
function addNode(new_pos){
    var ok = true;
 
    if (ok === true) {
        var original = document.getElementsByClassName('nodeBoxTemplate')[0];
        var clone = original.cloneNode(true);
        clone.classList.replace("nodeBoxTemplate","nodeBox")
        clone.classList.remove("hidden");

        if(isNaN(new_pos)){
            new_pos = document.getElementsByClassName("nodeBox").length;
        }
        clone.id = "node_" + new_pos;

        //clone.style.transform = "translate(0px, 0px)";
        console.log("cloning ,  Adding node:"+ new_pos);

        //document.getElementsByClassName('workArea')[0].insertBefore(clone,original);        
        document.getElementsByClassName('workArea')[0].appendChild(clone);
        
        //make newly added node draggable
        let draggable = new PlainDraggable(clone,
            {
            onMove: function() { updateLines(new_pos); }
            }
            );

        draggable.autoScroll = {
            target: document.getElementsByClassName("canvas")[0]
            };
            
        return clone;
    }
 }
 
 
 // Initializes and creates nodes in memory
 function initNodes(){

    //Spawn them
    for(let i=0; i< numNodes ;i++){
        addNode(i);
     }
 }

// Connects nodes in memory
 function connectNodes(){
    for(let i =0; i< connections.length; i++){
        a = document.getElementById('node_'+connections[i].start).getElementsByClassName("pos6")[0];
        b = document.getElementById('node_'+connections[i].end).getElementsByClassName("pos5")[0];
        connectionLines[i] = new LeaderLine(a,b);
    }
 }

 //Updates connection Lines
 function updateLines(i){
    for(let j=0; j <connections.length;j++)
                {
                    if((connections[j].start == i) || (connections[j].end == i))
                    {
                        connectionLines[j].position();
                    }
                }
 }



 //Main function
 window.addEventListener('load', function() { 

    initNodes();
    connectNodes();

  });


document.getElementById("addNewNode").addEventListener('click', addNode);

