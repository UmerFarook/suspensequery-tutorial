
type QueryParam = {
    query:string
}
type paramsStr = {
    queryKey: QueryParam[]
}

export const getMembers = async (params: paramsStr)=>{
    try{

        const {queryKey} = params;
        const [queryParam] = queryKey.filter(item=> Object(item).hasOwnProperty('query'))
        const {query} = queryParam || '';
        const urlParam = new URLSearchParams();
        if(query !==''){
            urlParam.set('query',query)
        }

        const response = await fetch(`http://localhost:8000/members?${urlParam.toString()}`,{

        });
        return await response.json();
    }
    catch (e){
        console.log(e.message)
        throw  new Error(`${e.message} Check your DB connection`)
    }

}