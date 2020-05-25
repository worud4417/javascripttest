const MOVELENGTH = 3.5
const PLAYGROUNDX = "1000px"
const PLAYGROUNDY = "450px"

const TANKHEIGHT = "50px"
const TANKWIDTH = "50px"

const GUNBARRELHEIGHT = "3px"
const GUNBARRELWIDTH = "70px"

window.onload = function(){
    var div1 = this.document.getElementById("myDiv")
    var playground = this.document.getElementById("playground")
    var gunBareel = this.document.getElementById("gunBarrel")

    playground.style.width = PLAYGROUNDX
    playground.style.height = PLAYGROUNDY

    div1.style.height = TANKHEIGHT
    div1.style.width = TANKWIDTH

    gunBareel.style.height = GUNBARRELHEIGHT
    gunBareel.style.paddingLeft = GUNBARRELWIDTH

    div1.style.marginTop = (PLAYGROUNDY.slice(0,PLAYGROUNDY.length-2)*1)-(div1.style.height.slice(0,div1.style.height.length-2)*1)+"px"

    this.document.addEventListener("keydown",function(e){
        const keyCode = e.keyCode;

        if(keyCode == 39){
            div1.style.marginLeft = moveTargetByMargin(div1.style.marginLeft,MOVELENGTH)
        }else if(keyCode == 37){
            div1.style.marginLeft = moveTargetByMargin(div1.style.marginLeft,-MOVELENGTH)
        }else if(keyCode == 38){

        }else if(keyCode == 40){

        }
    })
}


function moveTargetByMargin(_originValue, _moveLength){
    var number = _originValue.slice(0,_originValue.length-2)*1
    var movepoint = number+_moveLength

    var maxPoint = (PLAYGROUNDX.slice(0,PLAYGROUNDX.length-2)*1)-(TANKWIDTH.slice(0,TANKWIDTH.length-2)*1)

    if(movepoint<0){
        movepoint = 0
    } else if(movepoint>maxPoint){
        movepoint = maxPoint
    }

    var stringMovePoint = movepoint+"px"
    return stringMovePoint
}