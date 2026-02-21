import React, {Component, use, useState} from 'react';

function RowItem({render} : { render:(specialID:string)=>React.ReactNode }) {
    const [specialID, setSpecialID] = useState<string>('IS38654')
    return render(specialID)
}

export default RowItem;