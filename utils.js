export const capitalise = (str)=>{

    return str.charAt(0).toUpperCase()+str.slice(1);


}

export const serverRequest = async (url,method,body,headers)=>{

    const response = await fetch(`http://localhost:3000/${url}`,{
        credentials:'include',
        method:method,
        body: JSON.stringify(body),
        headers:{
            "Content-type":"application/json",
            ...headers,
        },
    });
    // console.log(response.data);
    const data = await response.json();
    console.log("from utils...",data);
    
    return data;

}