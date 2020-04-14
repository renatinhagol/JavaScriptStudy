// Ajax simples
var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/renatinhagol');
xhr.send(null);
xhr.onreadystatechange =  function(){
    if(xhr.readyState === 4 ){
        console.log(JSON.parse(xhr.responseText));
    }
}

// Promises
var myPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/renatinhagol');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro request');
                }
            }
        }
    })
}

myPromise()
.then(function(response) { 
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
});

// Ajax com biblioteca
axios.get('https://api.github.com/users/renatinhagol')
.then(function(response) { 
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
});

