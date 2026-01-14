import React, {MemoExoticComponent, Suspense, useState} from 'react';
import MembershipTable from "../components/MemebershipTable.tsx";
import ErrorBoundary from "../components/ErrorBoundry.tsx";
import SearchForm from "../components/SearchForm";


function Members() {
    const [query,setQuery] = useState('');
    const paramsQuery = {
        query:query ||''
    }
    const LoadingElement: MemoExoticComponent<React.FC> = React.memo(()=><p>Loading data</p>)
    return (
        <div>
            <h1>Members</h1>
            <ErrorBoundary>
                <SearchForm querySetFn={setQuery} />
                <Suspense fallback={<LoadingElement/>}>

                        <MembershipTable paramsQuery={paramsQuery}/>
                </Suspense>
            </ErrorBoundary>

        </div>
    );
}

export default Members;