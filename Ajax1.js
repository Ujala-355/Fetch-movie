const submit_button=document.getElementById("submit");
submit_button.onclick=function(){
    const xhr=new XMLHttpRequest()
    const ID_input=document.querySelector("#Id_input").value;
    const url = "https://www.omdbapi.com/?t="+ID_input+"&apikey=cb4577ce";
    xhr.onloadend=function(){
        if(this.status==200){
                var data=this.responseText;
                var jsonData=JSON.parse(data);
                console.log(jsonData);
                var Actors=jsonData.Actors;
                var Title=jsonData.Title;
                var Country=jsonData.Country;
                var Released_Date=jsonData.Released;
                var Type=jsonData.Genre;
                
                document.getElementById("movie_Actors").innerHTML="Movie Actors:- "+Actors;
                document.getElementById("movie_Title").innerHTML="Movie Name:- "+Title+"("+jsonData.Year+")";
                document.getElementById("movie_Country").innerHTML="Movie Country:- "+Country;
                document.getElementById("movie_Relsd_Date").innerHTML="Released Date:- "+Released_Date;
                document.getElementById("movie_Type").innerHTML="Movie Type:- "+Type;
          }; 
    };
    xhr.open("GET",url,true);
    xhr.send();
};
