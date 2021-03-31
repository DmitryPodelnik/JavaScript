let posY;
let change = false;
let changeLeft = false;
let gCorrectLeft = {
    valueTop:0,
    valueBottom:0
}
let gCorrectRight = {
    valueTop:0,
    valueBottom:0
}
$(document).ready(function() {
    $('#controlPoint').mousedown(function(event){
        posY = event.pageY;    
        changeLeft = true;  
        gCorrectLeft.valueTop = elemid.clientHeight
        gCorrectLeft.valueBottom = elemid2.clientHeight
    })    
    $('#leftPart').mouseup(function(event){
        changeLeft = false
    })   
    $('#rightPart').mouseover(function(event){
        changeLeft = false
    })  
    $('#leftPart').mousemove(function(event){
        if(changeLeft)
        ChangeSizeBlocks(event,gCorrectLeft,elemid.id,elemid2.id);
    })   

    $('#controlPointRight').mousedown(function(event){
        posY = event.pageY;    
        change = true;  
        gCorrectRight.valueTop = elemRUp.clientHeight;
        gCorrectRight.valueBottom = elemRDo.clientHeight;
    ;})    
    $('#rightPart').mouseup(function(event){
        change = false
    })  
    $('#leftPart').mouseover(function(event){
        change = false
    })  
    $('#rightPart').mousemove(function(event){
        if(change)
        ChangeSizeBlocks(event,gCorrectRight,elemRUp.id,elemRDo.id);
    })   
    
      $('#triangleLeft').click(function() {
        $( "#leftPart" ).animate({width: 'toggle'});
        $( "#hiddenSlider" ).animate({left: '0%'});
        $( "#rightPart" ).animate({width: '100%'});
        $('#triangleLeft').hide();
        $('#triangleRight').show('false');
      });
      $('#triangleRight').click(function() {
        $( "#leftPart" ).animate({width: 'toggle'});
        $( "#hiddenSlider" ).animate({left: '25%'});
        $('#triangleLeft').show();
        $('#triangleRight').hide('false');
        $( "#rightPart" ).animate({width: '75%'});
      });
       
});
const cMinHeight = 100;
function ChangeSizeBlocks(event,gCorrectLeft,topBlockId,bottomnBlockId){
    if(posY < event.pageY){
        if(gCorrectLeft.valueBottom < cMinHeight){ 
            return
        }
        gCorrectLeft.valueTop += event.pageY - posY;
        gCorrectLeft.valueBottom -= event.pageY - posY;
    }
    else {   
        if (gCorrectLeft.valueTop < cMinHeight) { 
            return
        }
        gCorrectLeft.valueTop -= posY - event.pageY ;
        gCorrectLeft.valueBottom += posY - event.pageY ;
    }
    $(`#${topBlockId}`).css('height',gCorrectLeft.valueTop + 'px');
    $(`#${bottomnBlockId}`).css('height',gCorrectLeft.valueBottom + 'px');
    posY = event.pageY;
}
