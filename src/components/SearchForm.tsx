import React from "react";
import {type Dispatch, type SetStateAction, useDeferredValue, useEffect, useRef, useState} from "react";

function SearchForm({querySetFn}:{querySetFn: (arg:string)=>void}) {

    const [searchKey, setSearchKey]  =useState('');
    const inputRel = useRef<HTMLInputElement>(0)

    const queryValue  =useDeferredValue(searchKey);
    const updateSearchValue = (value:string)=>{
        setSearchKey(value);
    }

    useEffect(() => {
       querySetFn(queryValue);
    }, [queryValue]);
    return (
        <div>
            <form>
                <input ref={inputRel}  onChange={(e)=>{updateSearchValue(inputRel.current?.value)}}  placeholder={'Enter Person name to search'} type={'text'}/>
            </form>
        </div>
    );
}

export default SearchForm;