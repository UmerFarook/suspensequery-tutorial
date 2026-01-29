
import Table from "./Table.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getMembers} from "../service/members.service.ts";

function MembershipTable({paramsQuery}:{paramsQuery:{query:string}} ) {


    const {data} = useSuspenseQuery({
        queryKey:['members',paramsQuery],
        queryFn: getMembers
    })

    const results = data.length <1 ?'No Data found':'';

    return (
        <div>

            <Table list={data}></Table>
            {results}

        </div>
    );
}

export default MembershipTable;