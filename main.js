// let data=document.querySelector(".data")
let fajer_time=document.querySelector(".fajer")
let sunset_time=document.querySelector(".sunset")
let dhuhr_time=document.querySelector(".Dhuhr")
let asr_time=document.querySelector(".Asr")
let maghrib_time=document.querySelector(".Maghrib")
let isha_time=document.querySelector(".isha")
let date=document.querySelector(".date")
let cityName=document.querySelector(".city-name")

let city=document.querySelector("#city")
let cities=[
    {
        arbicname:"سوهاج",
        englishname:"Sohag"
    },
    {
        arbicname:"اسيوط",
        englishname:"Asyūţ"
    },
    {
        arbicname:"القاهرة",
        englishname:"Al Qāhirah"
    },
    {
        arbicname:"الإسكندرية",
        englishname:"Al Iskandarīyah"
    },
    {
        arbicname:"	الجيزة",
        englishname:"Al Jīzah	"
    },
    {
        arbicname:"الإسماعيلية",
        englishname:"	Al Ismā'īlīyah"
    }
  
]
for(cit of cities){
    let cont=` <option style="background-color: black;" >${cit.arbicname}</option>`
    city.innerHTML+=cont
}

function mm(ciity){
    fetch(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${ciity}`)
.then(req =>{
    if(req.ok){
   return req.json()
}
})

  .then((json) =>{
    post=json.data
    console.log(post)
        
             
            //                 arwa.innerHTML +=content
            date.innerHTML=post.date.hijri.weekday.ar + "     " + post.date.readable     
            //  معاد اذان العصر
            let x=post.timings.Asr.slice(0,2)
            let y=x-12
            let s="PM"
          asr_time.innerHTML=` ${y} ${post.timings.Asr.slice(2,5)}  ${s}  ` 
              // معاد اذان الظهر
            // let x2=post.timings.Dhuhr.slice(0,2)
            // let y2=x2-12
            let a="AM"
           dhuhr_time.innerHTML= `${ post.timings.Dhuhr.slice(0,5)} ${s}`
           //  معاد اذان العشاء
            let x3=post.timings.Isha.slice(0,2)
            let y3=x3-12
            isha_time.innerHTML= `${y3} ${post.timings.Isha.slice(2,5) } ${s}` 
           //  معاد اذان المغرب
            let x4=post.timings.Maghrib.slice(0,2)
            let y4=x4-12
            maghrib_time.innerHTML=`${y4} ${post.timings.Maghrib.slice(2,5)} ${s}`
           //  معاد اذان الفجر
            fajer_time.innerHTML=`${ post.timings.Fajr.slice(0,5)} ${a}` 
           // معاد اذان الشروق

            sunset_time.innerHTML=`${post.timings.Sunrise.slice(0,5)} ${a}` 
    
                        // }
  } )
}
mm("Sohag")   
city.addEventListener("change",function(){
    // cityName=" "


let cname=""
for(let city of cities){
    if(city.arbicname == this.value){
        cname=city.englishname
    }

}
mm(cname)


       
    cityName.innerHTML=city.value
})




  
 






// city.addEventListener("change",function(){
//     // cityName=" "
//     if(city.value=="سوهاج")
//     {
//         mm("EG-SHG")
//     }
//     cityName.innerHTML=city.value
// })
// console.log(city.value)
// fetch("http://api.aladhan.com/v1/calendarByCity?country=EG&city=EG-SHG")
// .then(req =>{
//     if(req.ok){
//    return req.json()
// }
// })
// .then((json)=>
// {
//      console.log(json.data)
// })