
let friends = [];

function addFriend(){
    let friendName = document.getElementById("friend").value;
    if(friendName == null || friendName == ""){
        alert("Please enter a friend");
    } else {
        friends.push(friendName);
        uploadList();
        document.querySelector("#friend").value = "";
    }
}

function sortFriend(){

    let selectedFriend = Math.floor(Math.random()*friends.length);
    let result = document.getElementById("result");
    result.innerText = "";

    if(friends.length == 0){
        alert("There is no friends to sort");
    } else {
        result.innerHTML += `<li>El amigo secreto sorteado es: ${friends[selectedFriend]}</li>`;
        friends.splice(selectedFriend, 1);
        uploadList();
    }

}

function uploadList(){
    let listFriends = document.getElementById("friendList");
    listFriends.innerHTML = "";
    for(let i = 0; i < friends.length; i++){
        listFriends.innerHTML += `<li>${friends[i]}</li>`;
    }
}