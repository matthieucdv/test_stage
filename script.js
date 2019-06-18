//Fonction gérant le formulaire pour l'écriture du mail.
function EcrireMail()
{
	//On vérifie que tous les champs soient remplis
	if(document.getElementById("adresseMail").value.length!=0 && document.getElementById("objet").value.length!=0 && document.getElementById("mail").value.length!=0)
	{
		//Si tous les champs sont bien remplis, on envoie une alerte de confirmation pour l'envoi du mail.
		var contenuMail=document.getElementById("mail").value;
		var r=confirm("Etes vous sûr de vouloir envoyer ?\nContenu du mail:\n" + contenuMail);
		if(r==true){alert("Message envoyé");}
		else{alert("Message annulé");}
	}
	else //Si tous les champs ne sont pas remplis, on envoie un message d'alerte correspondant au champ non renseigné.
	{
		if(document.getElementById("adresseMail").value.length==0){alert("Veuilez saisir une adresse mail."); return;}
		if(document.getElementById("objet").value.length==0){alert("Veuilez saisir un objet."); return;}
		if(document.getElementById("mail").value.length==0){alert("Veuilez saisir le contenu du mail."); return;}
	}
}

//Fonction qui affiche ou dissimule le contenu de certaines parties du cv.
function hideShow(monElement)
{
	//Si on clique sur le titre et que la section est cachée, on affiche cette dernière.
	if(document.getElementById(monElement).style.display=="none")
		{
			document.getElementById(monElement).style.display="";
		}
	//Si on clique sur le titre et que la section est affichée, on cache cette dernière.
	else
	{
		document.getElementById(monElement).style.display="none";
	}
}

//Fonction permettant l'ajout d'une expérience professionnelle.
function AjouterExperiencePro()
{
	//On récupère la valeur du mois et de l'année
	selection1 = document.getElementById("DateMoisEP");
	selection2 = document.getElementById("DateAnneeEP");
	choix1 = selection1.selectedIndex  // On récupère l'index du <option> choisi.
	choix2 = selection2.selectedIndex
	var mois = selection1.options[choix1].value; // Récupération du texte du <option> d'index choix.
	var annee = selection2.options[choix2].value;
	//On vérifie que le champ descriptif de l'expérience professionnelle est bien rempli.
	if(document.getElementById("ContenuExperiencePro").value.length==0)
	{
		alert("Vous devez saisir un contenu."); //Dans le cas où le champ correspondnt n'est pas rempli.
		return; //On quitte la fonction.
	}
	//Si tous les champs sont valides, on affiche une popup demandant la confirmation du choix.
	var r=confirm("Etes-vous sûr de vouloir ajouter une expérience professionnelle ?\n");
	//Si l'utilisateur confirme l'ajout, on ajoute la nouvelle expérience professionnelle à la fin de la section concernée.
	if(r==true){document.getElementById("ExperiencePro").innerHTML=document.getElementById("ExperiencePro").innerHTML+"<li>"+"<strong>"+mois+" "+annee+": "+"</strong>"+document.getElementById("ContenuExperiencePro").value+"</li>";}
	else
	{
		return;
	}	
}

SALUT C EST MATTHIEU QUI AJOUTE UNE MODIFICATION !!!! JE L'AI REMODIFIE!!!