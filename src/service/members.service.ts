
type paramsStr = {
    queryKey: unknown
}

export const getMembers = async (params: paramsStr)=>{
    try{

        const {queryKey} = params
        const {query} = queryKey[1];
        const urlParam = new URLSearchParams();
        if(query !==''){
            urlParam.set('query',query)
        }
        console.log(params)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(`http://localhost:8000/members?${urlParam.toString()}`,{

        });
        return await response.json();
    }
    catch (e){
        throw  new Error('Something went terribly wrong')
    }

}