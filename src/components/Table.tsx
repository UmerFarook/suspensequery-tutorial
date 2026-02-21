import React from "react";
import RowItem from "./RowItem.tsx";

export type List = {
    _id:number,
    name:string,
    gender:string,
    membershipStartDate:string,
    membershipEndData:string
}

const RowContent = ({listItem,specialID})=>{

    return (
        <>
            <tr data-testId={`test${listItem._id}${specialID}`} key={listItem._id}><td>{listItem.name}</td><td>{listItem.membershipStartDate}</td></tr>
        </>
    )
}
function Table({list} :{list:List[]}) {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center ">
            <table>
                <tbody>


                {Array.isArray(list) && list?.map(listItem=>
                    <RowItem render={(specialID)=><RowContent specialID={specialID} listItem={listItem}/>}></RowItem>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;