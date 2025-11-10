// User Story 2 Acceptance Test
// "As a user, when I click the button, I can view a popup with facts related to tourism about that state."
// Checks if all state objects have information
function acceptanceTest2(){
    for (let i = 0; i < AllStates.length; i++){
        if(AllStates[i].info == "" || AllStates[i].info == null){
            return false;
        }
    }
    return true;
}

// User Story 6 Acceptance Test
// "As a user, I can select what states I have already visited."
// Comment out simplemaps_usmap.refresh(); Line 162 or your browser will crash
function acceptanceTest6(){
    for (let i = 0; i < AllStates.length; i++){
        try{
            simplemaps_usmap.hooks.click_state(AllStates[i].id);
            if (AllStates[i].visited == false){
                return false;
            }
        }
        catch(error) {
            return false;
        }
    }
    simplemaps_usmap.load();
    return true;
}

// User Story 7 Acceptance Test
// "As a user, after I have visited a state, it should be highlighted (or checkmarked) on the map."
function acceptanceTest7(){
    for (let i = 0; i < AllStates.length; i++){
        simplemaps_usmap.hooks.click_state(AllStates[i].id);   
        if(simplemaps_usmap_mapdata.state_specific[AllStates[i].id].color != "#ebb866"){
            return false;
        }
    }
    simplemaps_usmap.load();
    return true;
}

// console.assert(acceptanceTest2() == true, "All states should have tourism information.");

// console.assert(acceptanceTest6() == true, "All selected states should be visited.");

// console.assert(acceptanceTest7() == true, "All visited states should be highlighted.");