import React, {Suspense} from 'react';
import MembershipTable from "../components/MemebershipTable.tsx";
import ErrorBoundary from "../components/ErrorBoundry.tsx";


function Members() {


    const LoadingElement : React.FC = ()=>{
        return (<>

        <p>Loading for hours</p>
        </>)
    }
    return (
        <div>
            <h1>Members</h1>
            <ErrorBoundary>
            <Suspense fallback={<LoadingElement/>}>
              <MembershipTable/>
            </Suspense>
            </ErrorBoundary>

        </div>
    );
}

export default Members;