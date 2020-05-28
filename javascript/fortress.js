const MOVELENGTH = 3.5;
const PLAYGROUNDX = "1000px";
const PLAYGROUNDY = "450px";
const TANKHEIGHT = "50px";
const TANKWIDTH = "50px";
const GUNBARRELHEIGHT = "3px";
const GUNBARRELWIDTH = "70px";
const POWERHEIGHT = "10px";
const POWERWIDTH = "200px";
const CHARGEHEIGHT = "10px";

window.onload = function(){
    let div1 = this.document.getElementById("myDiv");
    let playground = this.document.getElementById("playground");
    let gunBareel = this.document.getElementById("gunBarrel");
    let angle = this.document.getElementById("angle");
    let power = this.document.getElementById("power");
    let charge = this.document.getElementById("charge");
    let angleValue = 0;
    let chargeValue = 0;

    playground.style.width = PLAYGROUNDX;
    playground.style.height = PLAYGROUNDY;
    div1.style.height = TANKHEIGHT;
    div1.style.width = TANKWIDTH;
    gunBareel.style.height = GUNBARRELHEIGHT;
    gunBareel.style.paddingLeft = GUNBARRELWIDTH;
    power.style.height = POWERHEIGHT;
    power.style.width = POWERWIDTH;
    charge.style.height = CHARGEHEIGHT;
    charge.style.width = "0px";

    div1.style.marginTop = this.pxStringToNumber(PLAYGROUNDY)-this.pxStringToNumber(div1.style.height)+"px";

    this.document.addEventListener("keydown",function(e){
        const keyCode = e.keyCode;

        if(keyCode == 39){
            div1.style.marginLeft = moveTargetByMargin(div1.style.marginLeft,MOVELENGTH);
        }else if(keyCode == 37){
            div1.style.marginLeft = moveTargetByMargin(div1.style.marginLeft,-MOVELENGTH);
        }else if(keyCode == 38){
            let angleNumber = angle.textContent*1+1;
            if (angleNumber>90){
                angleNumber = 90;
            }
            angleValue = angleNumber;
            angle.textContent = angleNumber+"";
        }else if(keyCode == 40){
            let angleNumber = angle.textContent*1-1;
            if (angleNumber<0){
                angleNumber = 0;
            }
            angleValue = angleNumber;
            angle.textContent = angleNumber+"";
        }else if(keyCode == 32){
            chargeValue++;
            if(chargeValue>100){
                chargeValue=100;
            }
            charge.style.width = chargeValue*2+"px";
        }
    })

    this.document.addEventListener("keyup",async function(e){
        const keyCode = e.keyCode;

        if(keyCode == 32){
            let bullet = document.createElement("div")
            bullet.style.height="10px";
            bullet.style.width="10px";
            bullet.style.backgroundColor="black";
            bullet.style.borderRadius="5px";
            bullet.style.position="absolute";

            bullet.style.marginTop = div1.style.marginTop;
            bullet.style.marginLeft = pxStringToNumber(div1.style.marginLeft)+pxStringToNumber(gunBareel.style.paddingLeft)+"px";
            playground.appendChild(bullet);

            let v = chargeValue;
            chargeValue=0;

            for(let i=0;;i++){
                let ii = i/20;
                let x = v*Math.cos(angleValue*Math.PI/180)*ii;
                let y = (v*Math.sin(angleValue*Math.PI/180)*ii)-(5*Math.pow(ii,2));

                bullet.style.marginLeft = pxStringToNumber(div1.style.marginLeft)+pxStringToNumber(gunBareel.style.paddingLeft)+x+"px";
                bullet.style.marginTop = pxStringToNumber(div1.style.marginTop)-y+"px";

                if(pxStringToNumber(bullet.style.marginTop)>pxStringToNumber(playground.style.height)){
                    break;
                } else if(pxStringToNumber(bullet.style.marginLeft)>pxStringToNumber(playground.style.width)){
                    break;
                }
                await sleep(3);
            }
            bullet.remove();
        }
    })
}


function moveTargetByMargin(_originValue, _moveLength){
    let number = pxStringToNumber(_originValue);
    let movepoint = number+_moveLength;

    let maxPoint = pxStringToNumber(PLAYGROUNDX)-pxStringToNumber(TANKWIDTH);

    if(movepoint<0){
        movepoint = 0;
    } else if(movepoint>maxPoint){
        movepoint = maxPoint;
    }

    var stringMovePoint = movepoint+"px";
    return stringMovePoint;
}

function pxStringToNumber(_pxValue){
    return _pxValue.slice(0,_pxValue.length-2)*1;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}