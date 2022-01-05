
//Spawn new nodes on click script
var addNode = function(){
    var ok = true;
 
    if (ok === true) {
        var original = document.getElementsByClassName('nodeBox')[0];
        var clone = original.cloneNode(true);

        console.log(clone.style);
        clone.style.transform = "translate(0px, 0px)";
        console.log("cloning");

        document.getElementsByClassName('workArea')[0].appendChild(clone);
        
        //make newly added node draggable
        new PlainDraggable(clone);

    }
 }
 

 window.addEventListener('load', function() { 
    //Make initially present individual nodes dragable
    node_list = document.getElementsByClassName('draggable');
    for (let i=0; i<node_list.length; i++)
    {
        new PlainDraggable(node_list[i]);
    }
  });


document.getElementById("addNewNode").addEventListener('click', addNode);

