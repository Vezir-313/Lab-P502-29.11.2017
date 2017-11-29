var img = document.getElementsByTagName('img')
var divim = document.getElementsByClassName("dropedeceyimdiv")

for(var i=0;i<img.length;i++){
img[i].ondragstart = function (evt) {

    evt.dataTransfer.setData('storedimg', evt.target.id)
    console.log('img terpenir')
}
}
for (var j = 0; j < divim.length; j++) {

    divim[j].ondragover = function (evt) {
        evt.preventDefault()
        
        } 
    
    divim[j].ondrop = function (evt) {

        evt.preventDefault();
        console.log('drp oldu')
        var savedimg = evt.dataTransfer.getData('storedimg');
        var dropedeceyimimg = document.getElementById(savedimg);
        this.appendChild(dropedeceyimimg);

     
       
    }
}
