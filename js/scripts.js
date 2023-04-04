// Questao 7: .onchange/function() 
function changePlaceholder() {

    let select = document.getElementById("sujet");
    let input = document.getElementById("ici");
    
      if (select.value === "autre") {
        input.value = "Préciser ici";
        ici.focus();}
    //   } else {
    //     input.placeholder = "";
    //   }
    }
    
    
    
    function formulaireContact() 
    
    {   
        //variáveis de nom
        let nom = document.getElementById("nom");
        let str1 = nom.value;
        // exclude  les caractères blans en début de chaine et fin de chaine
        str1 = str1.replace(/^\s*|\s*$/g,"");
        let regex = /^([a-zA-Z]){3,15}([- ])?([a-zA-Z]){0,15}$/g;
        let valide1 = regex.test(str1);
    
        //Questao 1, 9  e 10
        if (valide1 ==false) 
        {   
            alert("Attention: Le nom n'est pas valide. Il doit contenir entre 3 et 15 lettres et peut être composé de deux mots reliés avec un tiret ou un espace ");
            nom.focus();
            let label1 = document.querySelector("label[for='nom']");
            nom.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label1.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label1.style.fontSize = "18px";
                label1.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            nom.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label1.style.fontWeight = "normal";
                label1.style.fontSize = "medium";
                label1.style.fontStyle = "normal";
                label1.style.fontFamily = "initial";
              });
    
            return false;
        }
      
    
         //variáveis de courriel
         let courriel = document.getElementById("courriel");
         let str2 = courriel.value;
         let regex2 = /\w+@\w+\.[a-zA-Z]{3,3}/; 
         let valide2 = regex2.test(str2);
        
         //Questao 2, 9 e 10
        if (valide2 ==false) 
        {  
            alert("Attention: Adresse courriel invalide");
            courriel.focus();
            let label2 = document.querySelector("label[for='courriel']");
            courriel.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label2.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label2.style.fontSize = "18px";
                label2.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            courriel.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label2.style.fontWeight = "normal";
                label2.style.fontSize = "medium";
                label2.style.fontStyle = "normal";
                label2.style.fontFamily = "initial";
              });
            return false;
        }
    
        //Questao 3 e 10
        //variáveis de telephone
        let telephone = document.getElementById("telephone");
        let str3 = telephone.value;
        let regex3 = /^\+\d{1,3}\d{10,10}$/
        let valide3 = regex3.test(str3);
    
        //variável de Sujet/Titre
        let sujet = document.contact.sujet;
    
        //If de Telephone
        if (!str3 == true) //significa que value é null ou undefined, ou seja, string vazia
        {
            sujet.focus(); 
            let label3 = document.querySelector("label[for='sujet']");
            sujet.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label3.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label3.style.fontSize = "18px";
                label3.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            sujet.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label3.style.fontWeight = "normal";
                label3.style.fontSize = "medium";
                label3.style.fontStyle = "normal";
                label3.style.fontFamily = "initial";
              });
    
        }
        else if (valide3 ==false) 
        {  
            alert("Attention: Le numéro de téléphone entrée doit être valide. Exemple : +15141234567");
            telephone.focus();
            let label4 = document.querySelector("label[for='telephone']");
            telephone.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label4.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label4.style.fontSize = "18px";
                label4.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            telephone.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label4.style.fontWeight = "normal";
                label4.style.fontSize = "medium";
                label4.style.fontStyle = "normal";
                label4.style.fontFamily = "initial";
              });
    
    
    
            return false;   
        }
    
        //Questao 4 e 10
        //variável de Sujet/Titre junto com telefone
        //If de Sujet/Titre
        if(sujet.value===null||sujet.value==='')
        {
            alert("Attention: Choisissez un titre ");
            sujet.focus();
            let label5 = document.querySelector("label[for='sujet']");
            sujet.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label5.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label5.style.fontSize = "18px";
                label5.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            sujet.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label5.style.fontWeight = "normal";
                label5.style.fontSize = "medium";
                label5.style.fontStyle = "normal";
                label5.style.fontFamily = "initial";
              });
            return false;
        
        }
    
        //Questões 8 e 10
        
        // if (sujet.value === "autre" && ici.value === "") 
        // {
        //     ici.placeholder = "Préciser ici";
        //     ici.focus();
        //     alert("Avant de continuer, veuillez utiliser le champs <Préciser ici> pour décrire l'objet de votre message ");
        //     return false;
    
        // }
    
        //Questões 8 e 10
        if ((sujet.value === "autre" && ici.value === "Préciser ici") || (sujet.value === "autre" && ici.value === "" ))
        {
            // ici.placeholder = "Préciser ici";
            alert("Avant de continuer, veuillez utiliser le champs <Préciser ici> pour décrire l'objet de votre message ");
            ici.placeholder = "Préciser ici";
            ici.focus();
            let label6 = document.querySelector("label[for='ici']");
            ici.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label6.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label6.style.fontSize = "18px";
                label6.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            ici.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label6.style.fontWeight = "normal";
                label6.style.fontSize = "medium";
                label6.style.fontStyle = "normal";
                label6.style.fontFamily = "initial";
              });
            return false;
        }
    
    
        //Questao 6, 9 e 10
        //variáveis de Text area-message
    
         // récupérer la chaine entrés dans le texte area
         let area = document.getElementById("inputText");
         let str4= area.value;
         //1) transformer les caractères de fin de lignes en un caractère espace " "
         str4 = str4.replace(/\n/g," ");
         //2) exclude les caractères blans en début de chaine et fin de chaine
         str4 = str4.replace(/^\s*|\s*$/g,"");
         //3) convertir 2 espaces ou plus en 1 seul espace " " 
         str4 = str4.replace(/[ ]{2,}/g," ");
         // 4) rejeitar caracteres - ! # $ % ? & + ; ( ) [ ]>< 
         let regex4 = /[-!#$%?&+;()\[\]><]/g;
         // 5) testar se h'a caracteres - ! # $ % ? & + ; ( ) [ ]><  
         let valide4 = regex4.test(str4);
     
    
        if(str4 == "" || valide4 == true)
         {
            alert("Veuillez ecrire votre message. Le message ne doit pas contenir les caractères spéciaux suivants : - ! # $ % ? & + ; ( ) [ ]><");
            area.focus();
            let label7 = document.querySelector("label[for='inputText']");
            inputText.addEventListener("focus", function() {  //funçao para colocar em negrito o LABEL
                label7.style.fontWeight = "bold";
                // label1.style.fontStyle = "italic";
                label7.style.fontSize = "18px";
                label7.style.fontFamily = "Calibri,  Browallia New, Cascadia Mono,  cursive";
              });
            
            inputText.addEventListener("blur", function() { //funcao para voltar ao normal o LABEL quando sai do foco
                label7.style.fontWeight = "normal";
                label7.style.fontSize = "medium";
                label7.style.fontStyle = "normal";
                label7.style.fontFamily = "initial";
              });
            return false;
         }
    
    
    
         //Questao 5 e 10
        //vérifier si au moins un bouton radio est coché
    
        if (!document.contact.note[0].checked & !document.contact.note[1].checked & !document.contact.note[2].checked & !document.contact.note[3].checked & !document.contact.note[4].checked) 
        {
            let reponse1 = confirm("Confirmez-vous l'envoi de données sans évaluer le site?"); 
            if(reponse1 === false) 
            {
                document.contact.note[4].focus();
                return false;  
            }
    
            else 
            {
                alert("Le formulaire a été envoyé avec succès ! Merci !"); 
                
            } 
        } else 
    
        {
            let reponse3 = confirm("Confirmez-vous l'envoi de données?");
            if(reponse3 === false) 
            {
                document.contact.note[4].focus();
                return false;  
            }
    
            else 
            {
                alert("Le formulaire a été envoyé avec succès ! Merci !"); 
            }
        }
    }