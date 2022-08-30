var matrizImagen = new Array();

            matrizImagen[0] = "img/slide.jpg";
            matrizImagen[1] = "img/2.jpg";
            matrizImagen[2] = "img/3.jpg";
            matrizImagen[3] = "img/4.jpg";
            matrizImagen[4] = "img/5.jpg";

            var indice = 0;

            function mas(){
                indice += 1;
                if (indice > 5){
                    indice = 0;
                }
                document.images["numero"].src=matrizImagen[indice];
            }

            function menos(){
                indice -= 1;
                if (indice < 0){
                    indice = 2;
                }
                document.images["numero"].src=matrizImagen[indice];
            }

            function uno(){
                document.images["numero"].src=matrizImagen[0];
            }

            function dos(){
                document.images["numero"].src=matrizImagen[1];
            }

            function tres(){
                document.images["numero"].src=matrizImagen[2];
            }

            function cuatro(){
                document.images["numero"].src=matrizImagen[3];
            }

            function cinco(){
                document.images["numero"].src=matrizImagen[4];
            }