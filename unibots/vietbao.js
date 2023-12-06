googletag.cmd.push(function () {
    googletag.pubads().addEventListener("slotRenderEnded", function (event) {
             if (event.slot.getSlotId().getDomId() ==="ub-sticky"){
            let nodes_sticky = document.getElementById("ub-sticky").childNodes[0].childNodes;
                 if (nodes_sticky.length && nodes_sticky[0].nodeName.toLowerCase() == "iframe") {
                console.log("sticky filled"); 
            } else if(document.getElementById("ub-sticky-container")){
                document.getElementById("ub-sticky-container").style.display = "none";
              }               
      }
    });
  });