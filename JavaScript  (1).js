import React from "react"
import Reactions from "./Reaction"
export default function 
import(createAsyncThunk,createslice) from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    connectedUser:null,
    error:null,
    isloading:null
}
export const login=createAsyncThunk('users/login',async()
try {
    //code......
} catch(error){
       //code......
}
})
export const addUser=creatAsyncThunk('user/addUser',async()=>{
    try{
        //code.......
    }catch(error){
        
    }
})
const userSlice=createSlice({
    name:"usere",
    initialstate,
    reducers:{
        
        logout:(state)=>{
            //code......
        },
    },
})
  extraReducers:{
      [login.pending]:(state,action)=>{
          //code.....
      },
      [login,fulfilled]:(state,action)=>{
          //code.....
      },
       [login,fulfilled]:(state,action)=>{
          //code.....
      },
       [login,fulfilled]:(state,action)=>{
          //code.....
      },
       [login,fulfilled]:(state,action)=>{
          //code.....
      },
       [login,fulfilled]:(state,action)=>{
          //code.....
      },
  })
export default userSlice.reducer
export const {logout}userSlice.actions

<script>
   var userName=prompt('Entrer votre prénom:');
         alert(userName);//affiche Le prénom par l'utilisateur une seul fois interdit de repéter
    if(confirm('le nom est répèter sur un autre utilisateur refuse le'))
         alert('declarer utilisateur de changer le nom') 
   var hi='bonjour',name='toi',result;0
  myFunction();
  alert('bonjour');
// la fonction affiche une boite de dialoque avec "Bonjour"
var age = parseInt(prompt('Q'))

</script>

require('v8-compile-cache');
const { BrowserWindow, app, Tray, Menu, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs-extra');

let win,
    tray,
    contextMenu

function homeWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        show: false,
        center: true,
        title: 'canarie',
        icon: path.join(__dirname, './build/logo.png'),
        webPreferences: {
            nodeIntegration: true,
            sandbox: false,
        }
    });

    win.removeMenu();

    win?.loadURL('https://canarie.social')

    win?.once('ready-to-show', () => {
        win?.show();
    });

    win?.on('closed', (event) => {

        event?.preventDefault();
        tray = null
        contextMenu = null
        win = null
        app?.quit()
    });

    contextMenu = Menu.buildFromTemplate([
        {
            label: 'عرض التطبيق', click: function () {
                win?.isVisible() ? win?.hide() : win?.show()
            }
        },
        {
            label: 'إغلاق', click: function () {
                if (win !== null) {
                    win?.close();
                }
                else if (win === null) homeWindow()
                app.isQuiting = true;
                app?.quit();
            }
        }
    ]);

    tray = new Tray(path.join(__dirname, './build/logo.png'));
    tray?.setContextMenu(contextMenu);
    tray?.setToolTip("canarie");
    globalShortcut?.register('Ctrl+shift+B', () => {

        if (win?.isVisible()) {
            win?.hide()
        }
        else {
            win?.show()
        }

    });

    app?.on('before-quit', function () {
        tray?.destroy();
    });
}

app.on('ready', (e) => {

    e.preventDefault();
    let homePath = app?.getPath('home');
    let desktop = fs.existsSync(`${homePath}/.config/autostart/bassam-social.desktop`);

    if (desktop === false && process.platform === 'linux') {

        let data = `[Desktop Entry]
Name= bassam-social
Icon=org.bassam.social
Exec= bassam-social
Terminal=false
Type=Application
Comment=Bassam Social Desktop Application
Categories=Social;`

        fs.writeFileSync(`${homePath}/.config/autostart/bassam-social.desktop`, data);
    }
    homeWindow()
    app.setAppUserModelId("ma.canarie.social");

});

app.setLoginItemSettings({
    openAtLogin: true,
    path: path.join(process.resourcesPath, '../canarie-social.exe'),
    args: ['--hidden']
});
// Pour l'intro dans le logo
function afficher_message_intro() {
    // Afficher la boîte de dialogue
    document.getElementById("container").style.display = "flex";
}

function cacher_message_intro() {
    // Cacher la boîte de dialogue
    document.getElementById("container").style.display = "none";
}






// Fonctions pour verifictaion de supprimer :
function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function redirectToPage() {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = "supprimer.php";
}
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
// Pour l'intro dans le logo
function afficher_message_intro() {
    // Afficher la boîte de dialogue
    document.getElementById("container").style.display = "flex";
}

function cacher_message_intro() {
    // Cacher la boîte de dialogue
    document.getElementById("container").style.display = "none";
}





// Fonctions pour verifictaion de supprimer :
function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function redirectToPage() {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = "supprimer.php";
}

// Pour l'intro dans le logo
function afficher_message_intro() {
    // Afficher l'intro
    document.getElementById("container").style.display = "flex";
}

function cacher_message_intro() {
    // Cacher l'intro
    document.getElementById("container").style.display = "none";
}






// Fonction pour remonter au début de la page
function retour_en_haut() {
    document.documentElement.scrollTop = 0; //remonte vers le haut, en 0
}




// fonction pour afficher en decembre
// Fonction pour afficher l'image en fonction de la date
function affiche_image_date() {
    //  On regarde la date actuelle
    var dateActuelle = new Date();

    // Vérifier si c'est decembre (va de 0 à 11)
    if (dateActuelle.getMonth() === 11) {
        // Si le mois est décembre, afficher l'image
        document.getElementById('image_dec_1').src = "dec/dec_sapins.png";
        document.getElementById('image_dec_2').src = "dec/dec_sapin.png";
    } else {
        // Sinon on n'affiche pas
        document.getElementById('image_dec').src = '';
    }
}

// Appeler la fonction au chargement de la page
window.onload = affiche_image_date;




// Fonctions pour verifictaion de supprimer :
function openPopupA() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopupA() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function redirectToPageA(id_conv) {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = `supp_conv.php?id=${id_conv}`;
}

// Pour l'intro dans le logo
function afficher_message_intro() {
    // Afficher l'intro
    document.getElementById("container").style.display = "flex";
}

function cacher_message_intro() {
    // Cacher l'intro
    document.getElementById("container").style.display = "none";
}


// Pour le carousel
$(document).ready(function(){
    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
        $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
        indexImg = $img.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

    $img.css('display', 'none'); // on cache les images
    $currentImg.css('display', 'block'); // on affiche seulement l'image courante

    $("#prev").click(function () {
        $currentImg.css('display', 'none');
        if (i > 0) {
            i--;
        }
        else {
            i = indexImg;
        }
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    });

    $("#next").click(function () {
        i++; // on incrémente le compteur
        if(i <= indexImg) {
            $img.css('display', 'none'); // on cache les images
            $currentImg = $img.eq(i); // on définit la nouvelle image
            $currentImg.css('display', 'block'); // puis on l'affiche
        }
        else {
            i = indexImg;
        }
    });

    //fonction java défilement auto
    function maBoucle(){
        setTimeout(function(){
            $currentImg.css('display', 'none');
            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            maBoucle();
        }, 4000);
    }

    maBoucle(); // lance la fonction une première fois

});


// Fonction pour remonter au début de la page
function retour_en_haut() {
    document.documentElement.scrollTop = 0; //remonte vers le haut, en 0
}




// fonction pour afficher en decembre
// Fonction pour afficher l'image en fonction de la date
function affiche_image_date() {
    //  On regarde la date actuelle
    var dateActuelle = new Date();

    // Vérifier si c'est decembre (va de 0 à 11)
    if (dateActuelle.getMonth() === 11) {
        // Si le mois est décembre, afficher l'image
        document.getElementById('image_dec_1').src = "dec/dec_sapins.png";
        document.getElementById('image_dec_2').src = "dec/dec_sapin.png";
    } else {
        // Sinon on n'affiche pas
        document.getElementById('image_dec').src = '';
    }
}

// Appeler la fonction au chargement de la page
window.onload = affiche_image_date;


// Pour revenir a la position du like
var position = document.getElementById('positionElement');
var position2 = position.getBoundingClientRect().top;

// Rediriger
window.location.href = 'accueil.php#position' + position2;
position.scrollIntoView({ behavior: 'smooth', block: 'start' });




// Fonctions pour verifictaion de supprimer :
function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function redirectToPage(id_publi,btn) {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = `supp_admin.php?id=${id_publi}&btn=${btn}`;
}



function openPopup2() {
    document.getElementById('popup2').style.display = 'block';
    document.getElementById('overlay2').style.display = 'block';
}

function closePopup2() {
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('overlay2').style.display = 'none';
}

function redirectToPage2(id_publi,btn) {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = `supp_admin.php?id=${id_publi}&btn=${btn}`;
}




function openPopup3() {
    document.getElementById('popup3').style.display = 'block';
    document.getElementById('overlay3').style.display = 'block';
}

function closePopup3() {
    document.getElementById('popup3').style.display = 'none';
    document.getElementById('overlay3').style.display = 'none';
}
function redirectToPage(id_publi,btn) {
    // Remplacez "URL_DE_REDIRECTION" par l'URL réelle vers laquelle vous souhaitez rediriger l'utilisateur.
    window.location.href = `supp_admin.php?id=${id_publi}&btn=${btn}`;
}