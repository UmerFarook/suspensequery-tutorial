
export type List = {
    name:string,
    gender:string,
    membershipStartDate:string,
    membershipEndData:string
}

function Table({list} :{list:List[]}) {
    return (
        <div>
            <table>
                <tbody>
                {list?.map(listItem=> <tr><td>{listItem.name}</td><td>{listItem.membershipStartDate}</td></tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default Table;