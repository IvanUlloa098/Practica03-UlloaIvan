var count = 0;
var proceso = 0;
var pasos1 = 5;
var pasos2 = 5;
var fig = ["fig1.png", "fig2.png", "fig3.png", "fig4.png", "fig5.png", "fig6.png", "fig7.png", "fig8.png", "fig9.png", "fig10.png"];


window.onload = function() {
    
}

function asignar() {

    var arr=[];
    var r;
    do{
        r = Math.floor(Math.random() * 9);
        if(arr.indexOf(r) === -1) 
            arr.push(r);
    }while(arr.length < 5);

    document.getElementById("fig1").src = fig[arr[0]];
    document.getElementById("fig2").src = fig[arr[1]];
    document.getElementById("fig3").src = fig[arr[2]];
    document.getElementById("fig4").src = fig[arr[3]];
    document.getElementById("fig5").src = fig[arr[4]];
}

function navegar(clicked_id) {

    switch(clicked_id) {
        case "btn1":
            switch(count) {
                case 4:
                    //document.getElementById("fig4").style.display = "block";
                    count--;
                    document.getElementById("btn3").disabled = false;
                    this.regresar(document.getElementById("fig4"));
                break;
                
                case 3:
                    //document.getElementById("fig3").style.display = "block";
                    this.regresar(document.getElementById("fig3"));
                    count--;
                break;
                  
                case 2:
                    //document.getElementById("fig2").style.display = "block"; 
                    this.regresar(document.getElementById("fig2"));
                    count--;
                break;

                case 1:
                    //document.getElementById("fig1").style.display = "block";
                    document.getElementById("btn1").disabled = true;
                    this.regresar(document.getElementById("fig1"));
                    count--;
                break;                
                
            }
        break;
        
        case "btn2":
            location.reload();
          break;

        case "btn3":
            switch(count) {
                case 0:
                    //document.getElementById("fig1").style.display = "none";
                    document.getElementById("btn1").disabled = false;
                    this.mover(document.getElementById("fig1"));
                    count++;
                break;
                
                case 1:
                    //document.getElementById("fig2").style.display = "none";
                    this.mover(document.getElementById("fig2"));
                    count++;
                break;
                  
                case 2:
                    //document.getElementById("fig3").style.display = "none"; 
                    this.mover(document.getElementById("fig3"));
                    count++;
                break;

                case 3:
                    //document.getElementById("fig4").style.display = "none";
                    document.getElementById("btn3").disabled = true;
                    this.mover(document.getElementById("fig4"));
                    count++;
                break;                
                
            }
          break;
        
    }
}

function mover(figura){
    var limite = 300; 
    pos= parseInt(figura.style.left);

    (function() {
            figura, pos = 0,
                timer = setInterval(function() {
                    pos=pos+30;
                    figura.style.left = pos+"px";
                    if( pos == limite) clearInterval(timer);
                },12);
    })();
        
}

function regresar(figura){
    var limite = 0; 
    pos= parseInt(figura.style.left);

    (function() {
            figura, pos = 300,
                timer = setInterval(function() {
                    pos=pos-30;
                    figura.style.left = pos+"px";
                    if( pos == limite) clearInterval(timer);
                },12);
    })();
        
}