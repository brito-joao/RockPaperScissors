
const options=["rock","paper","scissors"];
const choices=[
    ["tie","lost","won"],
    ["won","tie","lost"],
    ["lost","won","tie"]
]
function user_input_filter(user_input_raw,options){
    let user_input_filtered=0;

    options.map(function (option,index){
        
        
        
        if(option.length===user_input_raw.length){
            user_input_filtered=index;
            
            
        }
    })
    return user_input_filtered;
    
}

function robot_choice_function(options){
    let random_choice=Math.floor(Math.random()* options.length);
    
    return random_choice;
    
}




function round(){
    var user_raw=prompt();
    let user_filtered=user_input_filter(user_raw,options);
    let robot_choice=robot_choice_function(options);
    
    const result=choices[user_filtered][robot_choice];
    
    if(result==="won"){
        return [1,0,0];
    }else if(result==="lost"){
        return [0,1,1];
    }else{
        return [0,0,2];
    }
}

function game_loop(){
    let score=0
    let computer_score=0;
    for(var i=0;i<5;i++){
        let both_scores=round();
        score+=both_scores[0];
        computer_score+=both_scores[1];
        
        choices_short=["won","lost","tied"];
        let state=choices_short[both_scores[2]]
        
        console.log(`you ${state};your score:${score}; computer's score:${computer_score}`);
    }
}
game_loop();

