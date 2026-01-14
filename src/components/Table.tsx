
export type List = {
    _id:number,
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
                {Array.isArray(list) && list?.map(listItem=> <tr key={listItem._id}><td>{listItem.name}</td><td>{listItem.membershipStartDate}</td></tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default Table;