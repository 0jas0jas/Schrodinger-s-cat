console.log("Hello")

let boxed = false;

function box(){
    document.getElementById("imgg").src="box.svg";
    document.getElementById("txt").innerHTML="Boxed.";
    document.getElementById("statState").innerHTML="Dead AND Alive"
    boxed = true;
}

function state(){
    if(boxed){
        let x = Math.random() * 10;
        document.getElementById("txt").innerHTML="State revealed!"
        if(x>=5){
            document.getElementById("imgg").src="skull-solid.svg";
            document.getElementById("statState").innerHTML="Dead.";
        }else{
            document.getElementById("imgg").src="liftarn_Cat_silhouette.svg";
            document.getElementById("statState").innerHTML="Alive!"
        }
    }
}

//skull-solid.svg