import {type Dispatch, type SetStateAction, useDeferredValue, useEffect, useRef, useState} from "react";

function SearchForm({querySetFn}:{querySetFn: unknown}) {

    const [searchKey, setSearchKey]  =useState('');

    const queryValue  =useDeferredValue(searchKey);



    const updateSearchValue = (e)=>{
        setSearchKey(e.target.value);
    }

    useEffect(() => {
       querySetFn(queryValue);
    }, [queryValue]);
    return (
        <div>
            <form  onSubmit={updateSearchValue}>
                <input onChange={(e)=>{updateSearchValue(e)}}  placeholder={'Enter Person name to search'} type={'text'}/>
            </form>
        </div>
    );
}

export default SearchForm;