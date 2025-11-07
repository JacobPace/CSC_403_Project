/*
Class for the State object that contains the values:
    name -> string: name of the state to be displayed on the popup
    visited -> boolean: is true/false depeing on if the state has been visited yet to prevent it being selected twice (false by default)
    neighbors -> array: contains a list of neighboring states that can be accessed to move the currently selected state to a non-visited neighbor

    Also contains the methods:
    setNeighbors(x) -> inputs an array of states to set as the neighbors of the state
    isVisited() -> setter method to change the visited boolean from "false" to "true" to indicate thatit has been visited
*/
class State {
    constructor(name, visited, neighbors){
        this.name = name;
        this.visited = false;
        this.neighbors = [];
    }
    setNeighbors(x){
        this.neighbors = x;
    }
    isVisited(){
        this.visited = true;
    }
}

let Alabama = new State("Alabama", false, []);
let Alaska = new State("Alaska", false, []);
let Arizona = new State("Arizona", false, []);
let Arkansas = new State("Akansas", false, []);
let California = new State("California", false, []);
let Colorado = new State("Colorado", false, []);
let Conneticut = new State("Conneticut", false, []);
let Delaware = new State("Delaware", false, []);
let Florida = new State("Florida", false, []);
let Georgia = new State("Georgia", false, []);
let Hawaii = new State("Hawaii", false, []);
let Idaho = new State("Idaho", false, []);
let Illinois = new State("Illinois", false, []);
let Indiana = new State("Indiana", false, []);
let Iowa = new State("Iowa", false, []);
let Kansas = new State("Kansas", false, []);
let Kentucky = new State("Kentucky", false, []);
let Louisiana = new State("Louisiana", false, []);
let Maine = new State("Maine", false, []);
let Maryland = new State("Maryland", false, []);
let Massachusetts = new State("Massachusetts", false, []);
let Michigan = new State("Michigan", false, []);
let Minnesota = new State("Minnesota", false, []);
let Mississippi = new State("Mississippi", false, []);
let Missouri = new State("Missouri", false, []);
let Montana = new State("Montana", false, []);
let Nebraska = new State("Nebraska", false, []);
let Nevada = new State("Nevada", false, []);
let New_Hampshire = new State("New Hampshire", false, []);
let New_Jersey = new State("New Jersey", false, []);
let New_Mexico = new State("New Mexico", false, []);
let New_York = new State("New York", false, []);
let North_Carolina = new State("North Carolina", false, []);
let North_Dakota = new State("North Dakota", false, []);
let Ohio = new State("Ohio", false, []);
let Oklahoma = new State("Oklahoma", false, []);
let Oregon = new State("Oregon", false, []);
let Pennsylvania = new State("Pennsylvania", false, []);
let Rhode_Island = new State("Rhode Island", false, []);
let South_Carolina = new State("South Carolina", false, []);
let South_Dakota = new State("South Dakota", false, []);
let Tennessee = new State("Tennessee", false, []);
let Texas = new State("Texas", false, []);
let Utah = new State("Utah", false, []);
let Vermont = new State("Vermont", false, []);
let Virginia = new State("Virginia", false, []);
let Washington = new State("Washington", false, []);
let West_Virginia = new State("West Virginia", false, []);
let Wisconsin = new State("Wisconsin", false, []);
let Wyoming = new State("Wyoming", false, []);

const AllStates = [Alabama, Alaska, Arizona, Arkansas, California, Colorado, Conneticut,
    Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky,
    Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri,
    Montana, Nebraska, Nevada, New_Hampshire, New_Jersey, New_Mexico, New_York, North_Carolina,
    North_Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode_Island, South_Carolina, South_Dakota,
    Tennessee, Texas, Utah, Vermont, Virginia, Washington, West_Virginia, Wisconsin, Wyoming];

setAllNeighbors();

function setAllNeighbors(){
    Alabama.setNeighbors([Mississippi, Florida, Georgia, Tennessee]);
    Alaska.setNeighbors([Washington, Idaho, Montana]);
    Arizona.setNeighbors([California, Nevada, Utah, Colorado, New_Mexico]);
    Arkansas.setNeighbors([Mississippi, Missouri, Oklahoma, Louisiana, Tennessee, Texas]);
    California.setNeighbors([Oregon, Nevada, Arizona]);
    Colorado.setNeighbors([Wyoming, Nebraska, Kansas, Oklahoma, Utah, New_Mexico, Arizona]);
    Connecticut.setNeighbors([New_York, Massachusetts, Rhode_Island]);
    Delaware.setNeighbors([Maryland, New_Jersey, Pennsylvania]);
    Florida.setNeighbors([Georgia, Alabama]);
    Georgia.setNeighbors([Tennessee, North_Carolina, South_Carolina, Florida, Alabama]);
    Hawaii.setNeighbors([California]);
    Idaho.setNeighbors([Washington, Oregon, Nevada, Montana, Wyoming, Utah, Alaska]);
    Illinois.setNeighbors([Iowa, Wisconsin, Indiana, Kentucky, Missouri]);
    Indiana.setNeighbors([Illinois, Michigan, Ohio, Kentucky]);
    Iowa.setNeighbors([Minnesota, South_Dakota, Nebraska, Missouri, Wisconsin, Illinois]);
    Kansas.setNeighbors([Nebraska, Colorado, Oklahoma, Missouri]);
    Kentucky.setNeighbors([Illinois, Indiana, Ohio, West_Virginia, Virginia, Tennessee, Missouri]);
    Louisiana.setNeighbors([Arkansas, Mississippi, Texas]);
    Maine.setNeighbors([New_Hampshire, Massachusetts]);
    Maryland.setNeighbors([West_Virginia, Pennsylvania, Delaware, Virginia]);
    Massachusetts.setNeighbors([Maine, New_Hampshire, Vermont, New_York, Connecticut, Rhode_Island]);
    Michigan.setNeighbors([Wisconsin, Indiana, Ohio]);
    Minnesota.setNeighbors([North_Dakota, South_Dakota, Wisconsin, Iowa]);
    Mississippi.setNeighbors([Arkansas, Louisiana, Tennessee, Alabama]);
    Missouri.setNeighbors([Iowa, Illinois, Kentucky, Tennessee, Arkansas, Oklahoma, Kansas, Nebraska]);
    Montana.setNeighbors([Alaska, North_Dakota, South_Dakota, Wyoming, Idaho]);
    Nebraska.setNeighbors([South_Dakota, Iowa, Missouri, Kansas, Colorado, Wyoming]);
    Nevada.setNeighbors([Oregon, Idaho, Utah, Arizona, California]);
    New_Hampshire.setNeighbors([Maine, Vermont, Massachusetts]);
    New_Jersey.setNeighbors([New_York, Pennsylvania, Delaware]);
    New_Mexico.setNeighbors([Colorado, Oklahoma, Texas, Arizona, Utah]);
    New_York.setNeighbors([Vermont, Massachusetts, Connecticut, Rhode_Island, New_Jersey, Pennsylvania]);
    North_Carolina.setNeighbors([Virginia, Tennessee, South_Carolina]);
    North_Dakota.setNeighbors([Minnesota, South_Dakota, Montana]);
    Ohio.setNeighbors([Michigan, Pennsylvania, West_Virginia, Kentucky, Indiana]);
    Oklahoma.setNeighbors([Kansas, Arkansas, Texas, New_Mexico, Colorado]);
    Oregon.setNeighbors([Washington, Idaho, Nevada, California]);
    Pennsylvania.setNeighbors([New_York, New_Jersey, Maryland, West_Virginia, Ohio]);
    Rhode_Island.setNeighbors([Massachusetts, Connecticut, New_York]);
    South_Carolina.setNeighbors([North_Carolina, Georgia]);
    South_Dakota.setNeighbors([North_Dakota, Minnesota, Iowa, Nebraska, Wyoming, Montana]);
    Tennessee.setNeighbors([Kentucky, Virginia, North_Carolina, Georgia, Alabama, Mississippi, Arkansas, Missouri]);
    Texas.setNeighbors([Oklahoma, Arkansas, Louisiana, New_Mexico]);
    Utah.setNeighbors([Idaho, Wyoming, Colorado, New_Mexico, Arizona, Nevada]);
    Vermont.setNeighbors([New_Hampshire, Massachusetts, New_York]);
    Virginia.setNeighbors([Maryland, North_Carolina, Tennessee, Kentucky, West_Virginia]);
    Washington.setNeighbors([Alaska, Oregon, Idaho]);
    West_Virginia.setNeighbors([Pennsylvania, Maryland, Virginia, Kentucky, Ohio]);
    Wisconsin.setNeighbors([Michigan, Illinois, Iowa, Minnesota]);
    Wyoming.setNeighbors([Montana, South_Dakota, Nebraska, Colorado, Utah, Idaho]);
}

// Function to generate a random INT between 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 // Moves to the next state and toggles the popup display based on visibility.
function nextState(){
    
    const popup = document.getElementById("popup");

    if (popup.style.display == "none"){
        selectState();
        popup.style.display = "inline-block";
        popup.innerHTML = currentState.name;
        currentState.isVisited();
        visitedStates++;
    }
    else {
        popup.style.display = "none";
    }
}

// Returns true/false if all states have been visited
function allVisited(){
    for (let i = 0; i < 49; i++){
        if (AllStates[i].visited == false){
            return false;
        }
    return true;
    }
}

// Returns true/false if any state has been visited
function anyVisited(){
    for (let i = 0; i < 49; i++){
        if(AllStates[i].visited == true){
            return true;
        }
    }
    return false;
}

function findNeighbor(state){
    console.log("Finding neighbor");
    let options = [];
    // Find all unvisted neighbors of current state
    for (let i = 0; i < state.neighbors.length; i++){
        if(state.neighbors[i].visited == false){
            options.push(state.neighbors[i]);
        }
    }
    // Randomly select a non visited neighbor of the current state
    if (options.length > 0){
        let randomNum = getRandomInt(0, options.length-1);
        return options[randomNum];
    }
    
    return findNeighborNeighbor(state);
}

function findNeighborNeighbor(newState){
    // Find neighbor of a neighbor that has yet to be visited if all current neighbors have been visited
    console.log("Finding neighbor of neighbor");
    let j;
    for(j = 0; j < newState.neighbors.length; j++){
        let k;
        let newerState = newState.neighbors[j];
        for(k = 0; k < newerState.neighbors.length; k++){
            if (newerState.neighbors[k].visited == false){
                return newerState.neighbors[k];
            }
        }
    return findNeighborNeighbor(newState.neighbors[getRandomInt(0, newState.neighbors.length-1)]);
    }
    
}

let currentState;
let visitedStates = 0;
function selectState(){
    console.log(visitedStates);
    
    // If all states have been visited, do the celebration
    if(allVisited() && visitedStates >= 50){
        console.log("All States have been visited!!!!");
    }
    // If any state has already been visited, move to its neighbor
    else if(anyVisited()){
        currentState.isVisited();
        currentState = findNeighbor(currentState);
    }
    // No state has been visited, randomly select a starting point
    else{
        visitedStates++;
        currentState = AllStates[getRandomInt(0, 49)];
    }

}
