



let books=[
{author:'Josue', tittle:'Adobe photoshop'},
{author:'Kevin', tittle:'HTML/CSS'},
{author:'Nathan', tittle:'Web Programming'},
]


function authSearch(){
	let aName= document.getElementById('authorSearch').value
	let searched= books.filter((x)=> (x.author.toUpperCase()).match(aName.toUpperCase()))
	if(searched.length >0){		
		document.getElementById('result').innerHTML='Yes we do have '+ searched.length +' books by ' + aName
		document.getElementById('searchedbooks').innerHTML=' '
		for(var j=0;j<searched.length;j++){			
			let listItem=document.createElement('li')
			let textnode=document.createTextNode(searched[j].author + ' : ' + searched[j].tittle)	
			listItem.appendChild(textnode)	
			document.getElementById('searchedbooks').appendChild(listItem)	
		}
	}
	else
	{
		document.getElementById('result').innerHTML='Sorry no books by ' + aName
	}	
}

function addBook(book){
 	let newbook =document.getElementById('addBook').value
 	let newtitle =document.getElementById('addTitle').value
 	var myobj = {author:newbook,tittle:newtitle}
 	books.push(myobj);
 	document.getElementById('result1').innerHTML='Your book has been added '

}

function showAllBooks() {
	document.getElementById('allTheBooks').innerHTML=' '
	for(var i=0; i<books.length; i++){
	let listItem=document.createElement('li')
	let textnode=document.createTextNode(books[i].author + ' : ' + books[i].tittle)	
	listItem.appendChild(textnode)	
	document.getElementById('allTheBooks').appendChild(listItem)	
	}
	
}