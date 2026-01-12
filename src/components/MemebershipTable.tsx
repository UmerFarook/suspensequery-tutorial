
import Table from "./Table.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getMembers} from "../service/members.service.ts";

function MembershipTable() {

    const {data} = useSuspenseQuery({
        queryKey:['members'],
        queryFn: getMembers
    })
    return (
        <div>
            <Table list={data}></Table>
        </div>
    );
}

export default MembershipTable;