async function API(){
   try {
    const response=await fetch("https://66e527005cc7f9b6273c6d05.mockapi.io/users")
    const data=await response.json()
   // console.table(data);
    return data;
   } catch (error) {
    console.log(error)
   }
}

API()
async function APICall(){
    const logdata=await API()
    const stuctdata=logdata.map((data)=>{ 
        console.log(data.name);
    })
}
APICall();

function PRO(){
    return new Promise((resolve,reject)=>{
        const x=true;
        setTimeout(()=>{
            if(x)
                resolve("Success");
            else
               reject("error");

        },3000)
    })
}
async function dataps(){
    try{
        const response =await PRO();
        console.log("Sucess");
    }
    catch (e){
        console.log("error")
    }
}
dataps();
PRO().then(data=>{console.log(data)}).catch(e=>{console.log(e)});