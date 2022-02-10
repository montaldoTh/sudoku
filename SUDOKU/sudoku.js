let tabJS=[ //tableau pour créer la grille de jeu
    [0,0,0,1,0,0,0,0,0], // des 0 et des 1 sont présent ces derniers définie si
    [0,0,1,0,0,0,1,0,0], // une case de la grille reçoit un chiffre aléatoire ou non
    [0,1,0,0,0,0,1,1,0], // 0 pour une case vide, 1 pour un nombre déjà fixé
    [0,0,0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1],
    [0,0,0,1,0,0,1,0,0],
    [0,0,0,1,0,1,0,0,1],
    [0,1,0,0,0,1,0,0,1],
    [1,0,0,0,0,1,0,0,1] 
]
let valSudoku=[] //recupère les valeur de la grille
let tabHTML = document.querySelector('#grille')
let test = recupValeur(valSudoku, tabHTML)
let boutonHTML = document.querySelector('#envoie')
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
/** Afficher votre tableau en HTML CSS
 * @param  {Array} tableauJS votre tableau créer en JS
 * @param  {Array} tableauID votre ID de votre tableau HTML
 */
 function afficheTab(tableauJS, tableauID){
    let objetTab = document.querySelector(tableauID)
    let compteur = 1
    for(let x = 0; x < 9; x++){
        let nmbRandom = getRandomArbitrary(1, 10)
        maligne= '<tr>'
        for(let y = 0; y < 9; y++){
            nmbRandom = getRandomArbitrary(1, 10)
            if(tableauJS[x][y] > 0){
                idInput = "id=inp"
                idInput += compteur
                maligne += '<td>'
                maligne += '<input ' + idInput + ' type="text" value="' + nmbRandom + '" disabled>'
                maligne +='</td>'
                compteur += 1
            } else{
                idInput = "id=inp"
                idInput += compteur
                maligne += '<td>'
                maligne += '<input ' + idInput + ' type="text" maxlength="1">'
                maligne +='</td>'
                compteur += 1
            }
        
        }
        maligne += '</tr>'
        objetTab.innerHTML += maligne
    }
}

boutonHTML.addEventListener('click', onclick, recupValeur(valSudoku, boutonHTML))

function recupValeur(tableau, input){
for(let x = 0; x < 81; x++){
        let idinp="#inp"+ (x+1)
        let input 
        let valeur =document.querySelector(idinp).value
        tableau.push(valeur)
    }return tableau
}







// PAS IMPORTANT //
let tabtest=[ //tableau pour créer la grille de jeu
    [1,2,3,1,8,8,4,5,6], // des 0 et des 1 sont présent ces derniers définie si
    [2,4,1,0,0,0,1,0,0], // une case de la grille reçoit un chiffre aléatoire ou non
    [3,1,5,0,0,0,1,1,0], // 0 pour une case vide, 1 pour un nombre déjà fixé
    [0,0,0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1],
    [0,0,0,1,0,0,1,0,0],
    [0,0,0,1,0,1,0,0,1],
    [0,1,0,0,0,1,0,0,1],
    [1,0,0,0,0,1,0,0,1] 
]
function verifColonne(tableau){

}
function verifLigne(tableau){
    for(x=0; x < tableau[x].length; x++){
        let tabsave = tableau[x]
        for(y=0; y< tableau[x].length; y++){
            if(tableau[x][y] == tabsave[y]){
                console.log('Des valeurs sont identiques, la valeur a la '+ x+1 +'ieme case et la ' + y+1 +'ieme case.' )
            }
        }
    }
}
function verifSquare(tableau){

}
afficheTab(tabJS, '#tabH')


