//Matias Vidal-Russell
//Period 4
//November 18, 2022

/*This program makes a card with a tree, a snowman, and text*/

/*Write code to manipulate the elements on your index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text and an music. */

var card = document.getElementById("1");
card.style.backgroundColor = "#90EE90";
card.style.width = "600px";
card.style.height = "600px";
card.style.position = "absolute";
//This draws the background card for the drawing


var treebase = document.getElementById("2");
treebase.style.backgroundColor = "#5C4033";
treebase.style.width = "40px";
treebase.style.height = "65px";
treebase.style.position = "absolute";
treebase.style.top = "460px";
treebase.style.left = "140px";
//This draws the stump of the tree


var tree1 = document.getElementById("3");
tree1.style.width = "0px";
tree1.style.height = "0px";
tree1.style.borderWidth = "130px";
tree1.style.borderStyle = "solid";
tree1.style.borderColor = "transparent";
tree1.style.borderBottomColor = "green";
tree1.style.borderBottomWidth = "170px";
tree1.style.position = "absolute";
tree1.style.top = "160px";
tree1.style.left = "30px";
//This draws the bottom triangle that makes up the tree


var tree2 = document.getElementById("4");
tree2.style.width = "0px";
tree2.style.height = "0px";
tree2.style.borderWidth = "110px";
tree2.style.borderStyle = "solid";
tree2.style.borderColor = "transparent";
tree2.style.borderBottomColor = "green";
tree2.style.borderBottomWidth = "140px";
tree2.style.position = "absolute";
tree2.style.top = "130px";
tree2.style.left = "49px";
//This draws the middle triangle that makes up the tree


var tree3 = document.getElementById("5");
tree3.style.width = "0px";
tree3.style.height = "0px";
tree3.style.borderWidth = "80px";
tree3.style.borderStyle = "solid";
tree3.style.borderColor = "transparent";
tree3.style.borderBottomColor = "green";
tree3.style.borderBottomWidth = "120px";
tree3.style.position = "absolute";
tree3.style.top = "110px";
tree3.style.left = "78px";
//This draws the top triangle that makes up the tree


var snowman1 = document.getElementById("6");
snowman1.style.width = "100px";
snowman1.style.height = "100px";
snowman1.style.borderRadius = "50%";
snowman1.style.backgroundColor = "white";
snowman1.style.position = "absolute";
snowman1.style.top = "435px";
snowman1.style.left = "380px";
//Thie draws the bottom circle that makes up the snowman


var snowman2 = document.getElementById("7");
snowman2.style.width = "85px";
snowman2.style.height = "85px";
snowman2.style.borderRadius = "50%";
snowman2.style.backgroundColor = "white";
snowman2.style.position = "absolute";
snowman2.style.top = "380px";
snowman2.style.left = "386px";
//This draws the middle circle that makes up the snowman


var snowman3 = document.getElementById("8");
snowman3.style.width = "72px";
snowman3.style.height = "72px";
snowman3.style.borderRadius = "50%";
snowman3.style.backgroundColor = "white";
snowman3.style.position = "absolute";
snowman3.style.top = "335px";
snowman3.style.left = "392px";
//This draws the top circle that makes up the snwoman


var eyeleft = document.getElementById("9");
eyeleft.style.width = "10px";
eyeleft.style.height = "10px";
eyeleft.style.borderRadius = "50%";
eyeleft.style.backgroundColor = "black";
eyeleft.style.position = "absolute";
eyeleft.style.top = "358px";
eyeleft.style.left = "410px";
//This draws the left eye of the snowman


var eyeright = document.getElementById("10");
eyeright.style.width = "10px";
eyeright.style.height = "10px";
eyeright.style.borderRadius = "50%";
eyeright.style.backgroundColor = "black";
eyeright.style.position = "absolute";
eyeright.style.top = "358px";
eyeright.style.left = "435px";
//This draws the right eye of the snowman


var stick1 = document.getElementById("11");
stick1.style.width = "35px";
stick1.style.height = "10px";
stick1.style.backgroundColor = "#5C4033";
stick1.style.position = "absolute";
stick1.style.top = "415px";
stick1.style.left = "354px";
//This draws the snowman's left arm


var stick2 = document.getElementById("12");
stick2.style.width = "35px";
stick2.style.height = "10px";
stick2.style.backgroundColor = "#5C4033";
stick2.style.position = "absolute";
stick2.style.top = "415px";
stick2.style.left = "467px";
//This draws the snowman's right arm


var header = document.getElementById("13");
header.style.width = "420px";
header.style.height = "110px";
header.style.backgroundColor = "#a6643d";
header.style.position = "absolute";
header.style.top = "40px";
header.style.left = "90px";
//This draws the snowman's left arm


var text = document.getElementById("14");
text.style.fontSize = "3em";
text.style.position = "absolute";
text.style.top = "35px";
text.style.left = "125px";
//This styles the text