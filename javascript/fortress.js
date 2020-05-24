const MOVELENGTH = 3
const PLAYGROUNDX = "1000px"
const PLAYGROUNDY = "500px"


window.onload = function(){
    var div1 = this.document.getElementById("myDiv")
    var playground = this.document.getElementById("playground")

    playground.style.width = PLAYGROUNDX
    playground.style.height = PLAYGROUNDY

    this.document.addEventListener("keydown",function(e){
        const keyCode = e.keyCode;

        if(keyCode == 39){
            div1.style.marginLeft = xMoveTargetByMargin(div1.style.marginLeft,MOVELENGTH)
        }else if(keyCode == 37){
            div1.style.marginLeft = xMoveTargetByMargin(div1.style.marginLeft,-MOVELENGTH)
        }else if(keyCode == 38){
            div1.style.marginTop = yMoveTargetByMargin(div1.style.marginTop,-MOVELENGTH)
        }else if(keyCode == 40){
            div1.style.marginTop = yMoveTargetByMargin(div1.style.marginTop,MOVELENGTH)
        }
    })
}


function xMoveTargetByMargin(_originValue, _moveLength){
    var number = _originValue.slice(0,_originValue.length-2)*1
    var movepoint = number+_moveLength
    var stringMovePoint = movepoint+"px"
    return stringMovePoint
}

function yMoveTargetByMargin(_originValue, _moveLength){
    var number = _originValue.slice(0,_originValue.length-2)*1
    var movepoint = number+_moveLength
    var stringMovePoint = movepoint+"px"
    return stringMovePoint
}