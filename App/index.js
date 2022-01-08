// Temporary values to simulate saved data
let numNodes = 3;
let connections = [{start:0,end:1}]

let connectionLines = []

//Spawn new nodes on click script
function addNode(){
    var ok = true;
 
    if (ok === true) {
        var original = document.getElementsByClassName('nodeBoxTemplate')[0];
        var clone = original.cloneNode(true);
        clone.classList.replace("nodeBoxTemplate","nodeBox")
        clone.classList.remove("hidden");

        let new_pos = document.getElementsByClassName("nodeBox").length;
        
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

        document.getElementsByClassName("canvas")[0].scroll(
            {
                top: 0,
                left:0,
                behavior: "smooth"
            });
            
        return clone;
    }
 }
 
 
 // Initializes and creates nodes in memory
 function initNodes(){

    //Spawn them
    for(let i=0; i< numNodes ;i++){
        addNode();
     }
 }

// Connects nodes (According to data stored in memory)
 function connectNodes(){

    for(let i =0; i< connections.length; i++){
        a = document.getElementById('node_'+connections[i].start).getElementsByClassName("top")[0];
        b = document.getElementById('node_'+connections[i].end).getElementsByClassName("bottom")[0];
        connectionLines[i] = new LeaderLine(a,b);
        
        line_element = document.querySelector('.leader-line:last-of-type');
        document.getElementById('lineWrapper').appendChild(line_element);
    }
 }

 //Updates connection Lines
 function updateLines(i){
     
    fixPosition();

    if( isNaN(i)){
        for(let j=0; j <connections.length;j++){
            connectionLines[j].position();
        }
    }
    else{
        for(let j=0; j <connections.length;j++)
        {
            if((connections[j].start == i) || (connections[j].end == i))
            {
                connectionLines[j].position();
            }
        }
    }
    
 }

//Fixes line positions inside the scrollable section
 function fixPosition() {
    elmWrapper = document.getElementById('lineWrapper')
    elmWrapper.style.transform = '';
    var rectWrapper = elmWrapper.getBoundingClientRect();

    // Move to the origin of coordinates to that of the document
    elmWrapper.style.transform = 'translate(' +
      ((rectWrapper.left + scrollX) * -1) + 'px, ' +
      ((rectWrapper.top + scrollY) * -1) + 'px)';
  }


  //drag to connect functionality
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


 //Main function
 window.addEventListener('load', function() { 
    initNodes();
    connectNodes();
  });

document.getElementById("addNewNode").addEventListener('click', addNode);

