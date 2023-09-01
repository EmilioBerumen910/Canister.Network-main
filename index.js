
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_7KfLw8_Sq4vXgYuU3-aaSmNOt_JiSAU",
  authDomain: "canister-aa7a2.firebaseapp.com",
  projectId: "canister-aa7a2",
  storageBucket: "canister-aa7a2.appspot.com",
  messagingSenderId: "876684192515",
  appId: "1:876684192515:web:f389ac9e55431688ebd736",
  measurementId: "G-GLQZTM66KY"
};

firebase.initializeApp(firebaseConfig);

import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

var storage = firebase.storage();

var storageRef = storage.ref();

var DETACHEDFilm = storageRef.child('Films/DETACHED SHORT FILM.mp4');
var BirthDayCakeFilm = storageRef.child('Films/Birthday Cake (2022) - Short Film.mp4');
var TBWEGUFilm = storageRef.child('Films/The Boy that eventually grow up.mp4');
var VanitasFilm = storageRef.child('Films/VANITAS SHORT FILM.mp4');
var MasteryJournalMario = storageRef.child('Films/MarioRangel_masteryjournal.mp4');
var SabrosoFilm=storageRef.child('Films/SABROSO VIDEO.mp4');
var SleepingBEauty=storageRef.child('Films/Sleeping Beauty.mp4')


SleepingBEauty.getDownloadURL().then(function(url) {
  var videoElement = document.getElementById('SleepingBEauty');
  videoElement.src = url;
  }).catch(function(error) {
  console.log(error);
  });

DETACHEDFilm.getDownloadURL().then(function(url) {
var videoElement = document.getElementById('DetachedFilm');
videoElement.src = url;
}).catch(function(error) {
console.log(error);
});

BirthDayCakeFilm.getDownloadURL().then(function(url) {
  var videoElement = document.getElementById('BirthDayCakeFilm');
  videoElement.src = url;
  }).catch(function(error) {
  console.log(error);
  });

  TBWEGUFilm.getDownloadURL().then(function(url) {
    var videoElement = document.getElementById('TBWEGUFilm');
    videoElement.src = url;
    }).catch(function(error) {
    console.log(error);
    });

  VanitasFilm.getDownloadURL().then(function(url) {
    var videoElement = document.getElementById('VanitasFilm');
    videoElement.src = url;
    }).catch(function(error) {
    console.log(error);
    });

    
    MasteryJournalMario.getDownloadURL().then(function(url) {
    var videoElement = document.getElementById('MasteryJournalMario');
    videoElement.src = url;
    }).catch(function(error) {
    console.log(error);
    });


      SabrosoFilm.getDownloadURL().then(function(url) {
        var videoElement = document.getElementById('SabrosoFilm');
        videoElement.src = url;
        }).catch(function(error) {
        console.log(error);
        });



