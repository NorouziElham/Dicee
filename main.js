function Start(){
    let x= Math.random();
    let y=Math.random();
    x =(x * 6)+1;
    y =(y * 6)+1;
    x = Math.floor(x);
    y = Math.floor(y);
    if (x == 1)
      {document.getElementById("img1").src="images/dice1.png";}
    else if (x == 2)
      {document.getElementById("img1").src="images/dice2.png";} 
    else if (x == 3)
      {document.getElementById("img1").src="images/dice3.png";}  
    else if (x == 4)
      {document.getElementById("img1").src="images/dice4.png";} 
    else if (x == 5)
      {document.getElementById("img1").src="images/dice5.png";}
    else if (x == 6) 
      {document.getElementById("img1").src="images/dice6.png";}
    if (y == 1)
      {document.getElementById("img2").src="images/dice1.png";}
    else if (y == 2)
      {document.getElementById("img2").src="images/dice2.png";} 
    else if (y == 3)
      {document.getElementById("img2").src="images/dice3.png";}  
    else if (y == 4)
      {document.getElementById("img2").src="images/dice4.png";} 
    else if (y == 5)
      {document.getElementById("img2").src="images/dice5.png";}
    else if (y == 6) 
      {document.getElementById("img2").src="images/dice6.png";} 
    if ( x > y )     
     { document.getElementById("winer") .innerHTML="player 1 is wins !";
       winner();
       document.getElementById("player1").style.color="red";
       document.getElementById("player2").style.color="black";}
    else if (x < y )
     {document.getElementById("winer") .innerHTML="player 2 is wins !";
      winner();
      document.getElementById('player2').style.color="red";
      document.getElementById("player1").style.color="black";} 
    else
     {document.getElementById("winer") .innerHTML="Both are equal!";
     winner();
     document.getElementById("player1").style.color="green";
     document.getElementById("player2").style.color="green";} 

        
}

function EditeName(){
    document.getElementById("player1").innerHTML=prompt("enter name of player 1");
    document.getElementById("player2").innerHTML=prompt("enter name of player 2");
    
}
function refresh(){
    document.getElementById("refresh").loction.reload();
}

function winner()
{ document.getElementById("winer").style.color="red";
  document.getElementById("winer").style.fontSize="30px";

}