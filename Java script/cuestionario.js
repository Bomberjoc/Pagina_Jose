
function load_page(){
    document.getElementById("quest").innerHTML = "<h3>" + "¿Quién asesinó a Obi Wan-Kenobi?" + "</h3>"
    answer1.value = "Anakin Skywalker";
    answer2.value = "Ahsoka Tano";
    answer3.value = "Palpatine";
    answer4.value = "Lando Calrissian";
}
function reload_page(){
    location.reload(true);
}
var c=0;
var p=0;
var total = "";
function res1(){
    p+=1;
    if(p==1){
        c+=1;
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Dónde nació Anakin Skywalker?" + "</h3>"
        document.getElementById("answer1").value = "Coruscant";
        document.getElementById("answer2").value = "Mustafar";
        document.getElementById("answer3").value = "Tatooine";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==2){
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Cuál es el nombre de 'Baby Yoda'?" + "</h3>"
        document.getElementById("answer1").value = "Baby Yoda ._.";
        document.getElementById("answer2").value = "Grogu";
        document.getElementById("answer3").value = "Jango Fett";
        document.getElementById("answer4").value = "Plastita verde";
    }
    else if(p==3){
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Quién era el elegido?" + "</h3>"
        document.getElementById("answer1").value = "Luke Skywalker";
        document.getElementById("answer2").value = "Anakin Skywalker";
        document.getElementById("answer3").value = "Leia Organa";
        document.getElementById("answer4").value = "Kanan Jarrus";
    }
    else if(p==4){
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿A quién pertenece el sable negro?" + "</h3>"
        document.getElementById("answer1").value = "A quien lo gane en batalla";
        document.getElementById("answer2").value = "A quien lo herede por legado";
        document.getElementById("answer3").value = "A quien pueda sacarlo de la roca :v";
        document.getElementById("answer4").value = "Al que se lo encuentre";
    }
    else if(p==5){
        c+=1;
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Qué planeta gobernaba Padme Amidala?" + "</h3>"
        document.getElementById("answer1").value = "La tierra";
        document.getElementById("answer2").value = "Tatooine";
        document.getElementById("answer3").value = "Kamino";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==6){
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
        if(c==0){
            total = "Pésimo";
        }
        else if(c>0 && c<=3){
            total= "Malo";
        }
        else if(c>3 && c<=5){
            total= "Bueno";
        }
        else{
            total= "Excelente";
        }
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000,
                didClose: () => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Respondiste correctamente:",
                        text: c+"/6"+"   "+"Tu desempeño fue "+total,
                        showConfirmButton: true,
                        timer: 5000
                    }); 
                }
            });
        
    }
}
function res2(){
    p+=1;
    if(p==1){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Dónde nació Anakin Skywalker?" + "</h3>"
        document.getElementById("answer1").value = "Coruscant";
        document.getElementById("answer2").value = "Mustafar";
        document.getElementById("answer3").value = "Tatooine";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==2){
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Cuál es el nombre de 'Baby Yoda'?" + "</h3>"
        document.getElementById("answer1").value = "Baby Yoda ._.";
        document.getElementById("answer2").value = "Grogu";
        document.getElementById("answer3").value = "Jango Fett";
        document.getElementById("answer4").value = "Plastita verde";
    }
    else if(p==3){
        c+=1;
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Quién era el elegido?" + "</h3>"
        document.getElementById("answer1").value = "Luke Skywalker";
        document.getElementById("answer2").value = "Anakin Skywalker";
        document.getElementById("answer3").value = "Leia Organa";
        document.getElementById("answer4").value = "Kanan Jarrus";
    }
    else if(p==4){
        c+=1;
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿A quién pertenece el sable negro?" + "</h3>"
        document.getElementById("answer1").value = "A quien lo gane en batalla";
        document.getElementById("answer2").value = "A quien lo herede por legado";
        document.getElementById("answer3").value = "A quien pueda sacarlo de la roca :v";
        document.getElementById("answer4").value = "Al que se lo encuentre";
    }
    else if(p==5){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Qué planeta gobernaba Padme Amidala?" + "</h3>"
        document.getElementById("answer1").value = "La tierra";
        document.getElementById("answer2").value = "Tatooine";
        document.getElementById("answer3").value = "Kamino";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==6){
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
        if(c==0){
            total = "Pésimo";
        }
        else if(c>0 && c<=3){
            total= "Malo";
        }
        else if(c>3 && c<=5){
            total= "Bueno";
        }
        else{
            total= "Excelente";
        }
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000,
                didClose: () => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Respondiste correctamente:",
                        text: c+"/6"+"   "+"Tu desempeño fue "+total,
                        showConfirmButton: true,
                        timer: 5000
                    }); 
                }
            });
        
    }
}
function res3(){
    p+=1;
    if(p==1){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Dónde nació Anakin Skywalker?" + "</h3>"
        document.getElementById("answer1").value = "Coruscant";
        document.getElementById("answer2").value = "Mustafar";
        document.getElementById("answer3").value = "Tatooine";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==2){
        c+=1;
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000
            });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Cuál es el nombre de 'Baby Yoda'?" + "</h3>"
        document.getElementById("answer1").value = "Baby Yoda ._.";
        document.getElementById("answer2").value = "Grogu";
        document.getElementById("answer3").value = "Jango Fett";
        document.getElementById("answer4").value = "Plastita verde";
    }
    else if(p==3){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Quién era el elegido?" + "</h3>"
        document.getElementById("answer1").value = "Luke Skywalker";
        document.getElementById("answer2").value = "Anakin Skywalker";
        document.getElementById("answer3").value = "Leia Organa";
        document.getElementById("answer4").value = "Kanan Jarrus";
    }
    else if(p==4){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿A quién pertenece el sable negro?" + "</h3>"
        document.getElementById("answer1").value = "A quien lo gane en batalla";
        document.getElementById("answer2").value = "A quien lo herede por legado";
        document.getElementById("answer3").value = "A quien pueda sacarlo de la roca :v";
        document.getElementById("answer4").value = "Al que se lo encuentre";
    }
    else if(p==5){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Qué planeta gobernaba Padme Amidala?" + "</h3>"
        document.getElementById("answer1").value = "La tierra";
        document.getElementById("answer2").value = "Tatooine";
        document.getElementById("answer3").value = "Kamino";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==6){
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
        if(c==0){
            total = "Pésimo";
        }
        else if(c>0 && c<=3){
            total= "Malo";
        }
        else if(c>3 && c<=5){
            total= "Bueno";
        }
        else{
            total= "Excelente";
        }
        Swal.fire({
                position: "center",
                icon: "error",
                title: "Respuesta incorrecta",
                text: c,
                showConfirmButton: false,
                timer: 1000,
                didClose: () => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Respondiste correctamente:",
                        text: c+"/6"+"   "+"Tu desempeño fue "+total,
                        showConfirmButton: true,
                        timer: 5000
                    }); 
                }
            });
        
    }
}
function res4(){
    p+=1;
    if(p==1){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Dónde nació Anakin Skywalker?" + "</h3>"
        document.getElementById("answer1").value = "Coruscant";
        document.getElementById("answer2").value = "Mustafar";
        document.getElementById("answer3").value = "Tatooine";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==2){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Cuál es el nombre de 'Baby Yoda'?" + "</h3>"
        document.getElementById("answer1").value = "Baby Yoda ._.";
        document.getElementById("answer2").value = "Grogu";
        document.getElementById("answer3").value = "Jango Fett";
        document.getElementById("answer4").value = "Plastita verde";
    }
    else if(p==3){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Quién era el elegido?" + "</h3>"
        document.getElementById("answer1").value = "Luke Skywalker";
        document.getElementById("answer2").value = "Anakin Skywalker";
        document.getElementById("answer3").value = "Leia Organa";
        document.getElementById("answer4").value = "Kanan Jarrus";
    }
    else if(p==4){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿A quién pertenece el sable negro?" + "</h3>"
        document.getElementById("answer1").value = "A quien lo gane en batalla";
        document.getElementById("answer2").value = "A quien lo herede por legado";
        document.getElementById("answer3").value = "A quien pueda sacarlo de la roca :v";
        document.getElementById("answer4").value = "Al que se lo encuentre";
    }
    else if(p==5){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Respuesta incorrecta",
            text: c,
            showConfirmButton: false,
            timer: 1000
        });
        document.getElementById("quest").innerHTML = "<h3>" + "¿Qué planeta gobernaba Padme Amidala?" + "</h3>"
        document.getElementById("answer1").value = "La tierra";
        document.getElementById("answer2").value = "Tatooine";
        document.getElementById("answer3").value = "Kamino";
        document.getElementById("answer4").value = "Naboo";
    }
    else if(p==6){
        c+=1;
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
        if(c==0){
            total = "Pésimo";
        }
        else if(c>0 && c<=3){
            total= "Malo";
        }
        else if(c>3 && c<=5){
            total= "Bueno";
        }
        else{
            total= "Excelente";
        }
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Respuesta correcta",
                text: c,
                showConfirmButton: false,
                timer: 1000,
                didClose: () => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Respondiste correctamente:",
                        text: c+"/6"+"   "+"Tu desempeño fue "+total,
                        showConfirmButton: true,
                        timer: 5000
                    }); 
                }
            });
        
    }
}


    
