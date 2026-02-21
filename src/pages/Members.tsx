import React, {MemoExoticComponent, Suspense, useState} from 'react';
import MembershipTable from "../components/MemebershipTable.tsx";
import ErrorBoundary from "../components/ErrorBoundry.tsx";
import SearchForm from "../components/SearchForm";
import withTheme from "../components/withTheme.tsx";
import {useThemeFromContext} from "../hooks/useTheme.tsx";
import {NavLink} from "react-router";
import WithGlobalFont from "../components/withGlobalFont.tsx";
import withGlobalFont from "../components/withGlobalFont.tsx";


function Members() {
    const [query,setQuery] = useState('');
    const paramsQuery = {
        query:query ||''
    }

    const {theme,setTheme} = useThemeFromContext();
    const LoadingElement: MemoExoticComponent<React.FC> = React.memo(()=><p>Loading data</p>);
    const DarkTable  = withTheme(MembershipTable);
    const BiggerFontTable = withGlobalFont(DarkTable)
    return (
        <div>
            {query}
            <NavLink to={'/ref'}>Ref</NavLink>
            <h1 data-testid={'title'} style={{'color':theme }}>Members</h1>
            <button onClick={()=>setTheme('orange')}>Change Theme</button>
            <ErrorBoundary>
                <SearchForm querySetFn={setQuery} />
                <Suspense fallback={<LoadingElement/>}>

                        <BiggerFontTable paramsQuery={paramsQuery}/>
                </Suspense>
            </ErrorBoundary>

        </div>
    );
}

export default Members;