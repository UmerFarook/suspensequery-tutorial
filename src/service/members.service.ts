
export const getMembers = async ()=>{
    try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch('http://localhost:8000/members');
        return await response.json();
    }
    catch (e){
        throw  new Error('Something went terribly wrong')
    }

}