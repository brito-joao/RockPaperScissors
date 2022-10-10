const buttons=document.querySelectorAll("button");
const game_result=document.querySelector(".won-lost");
const robotOutput=document.querySelector(".computerOutput");
const options=["✊","✋","✌️"];
const choices=[
    ["tie","lost","won"],
    ["won","tie","lost"],
    ["lost","won","tie"]
]

//to use current_option_num as user_input_filtered;


for(let i=0;i<buttons.length;i++){
    current_option_num=i;
}

function button_events(score){
    let current_option_num=0;
    for(let i=0;i<buttons.length;i++){
        
        
        buttons[i].onclick=function(){
            score.innerText=i;
            
        };
        
    }console.log(current_option_num);
        
      
    
    return current_option_num;
}

function robot_choice_function(options){
    let random_choice=Math.floor(Math.random()* options.length);
    
    return random_choice;
    
}






function round(){
    button_events(robotOutput)
    let user_filtered=parseInt(robotOutput.textContent);
    console.log(robotOutput.textContent)
    let robot_choice=robot_choice_function(options);
    console.log("hello world",user_filtered);
    const result=choices[user_filtered][robot_choice];
    
    console.log(result);
    if(result==="won"){
        return [1,0,0];
    }else if(result==="lost"){
        return [0,1,1];
    }else{
        return [0,0,2];
    }
    
}
function run(self){
    
    let robot_choice=robot_choice_function(options);
    let person_choice=self;
    const result=choices[person_choice][robot_choice];
    console.log(options[robot_choice],result);
    game_result.innerText=result;
    robotOutput.innerText=options[robot_choice];

}


