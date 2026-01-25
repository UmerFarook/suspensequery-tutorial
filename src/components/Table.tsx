import React from "react";

export type List = {
    _id:number,
    name:string,
    gender:string,
    membershipStartDate:string,
    membershipEndData:string
}

function Table({list} :{list:List[]}) {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center ">
            <table>
                <tbody>
                {Array.isArray(list) && list?.map(listItem=> <tr data-testId={`test${listItem._id}`} key={listItem._id}><td>{listItem.name}</td><td>{listItem.membershipStartDate}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;