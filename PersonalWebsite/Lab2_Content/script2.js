console.log("hi");
var last;
var color;
function wasClicked(event){
    var target= event.target;
    var kids=target.children;
    console.log("holo")
    console.log(kids)
    var snd = new Audio('holo.mov');
    snd.play();
    if(kids.length>0){
        if(last!=null)
            last.style.backgroundColor = color
        color=kids[0].style.backgroundColor
        kids[0].style.backgroundColor = "teal";
        last=kids[0]
        return
    }
    if(kids.length==0){
        var targeto=target.parentElement
        kids=targeto.children
        if(kids[0]==target){
            console.log(kids)
            if(last!=null)
                last.style.backgroundColor = color
            color=kids[1].style.backgroundColor
            last=kids[1]
            kids[1].style.backgroundColor="teal";
            return
        }
        if(kids[1]==target && kids.length==2){
            var targeta=targeto.parentElement;
            var kidder=targeta.children
            if(targeto==kidder[0]){
                if(last!=null)
                    last.style.backgroundColor = color
                color=kidder[1].style.backgroundColor
                last=kidder[1]
                kidder[1].style.backgroundColor="teal"
                return
            }
            if(targeto==kidder[1]){
                if(last!=null)
                    last.style.backgroundColor = color
                color=kidder[2].style.backgroundColor
                last=kidder[2]
                kidder[2].style.backgroundColor="teal"
                return
            }
            else{
                if(last!=null)
                    last.style.backgroundColor = color
                color=targeto.parentElement.style.backgroundColor
                last=targeto.parentElement
                targeto.parentElement.style.backgroundColor = "teal"
                return
        }
        }

    }
}