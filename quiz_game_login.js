function login(){
   
        player1_name= document.getElementById("player1_input").value;
        player2_name= document.getElementById("player2_input").value;
        
        localStorage.setItem("Player1",player1_name);
        localStorage.setItem("Player2",player2_name);

        player1_score=0;
        player2_score=0;
     
    window.location= "game_page.html";
}