
import Table from "./Table.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";

function MembershipTable() {
    const {data} = useSuspenseQuery({
        queryKey:['members'],
        queryFn:async ()=>{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await fetch('http://localhost:8000/members');
            return await response.json();
        }
    })
    return (
        <div>
            <Table list={data}></Table>
        </div>
    );
}

export default MembershipTable;