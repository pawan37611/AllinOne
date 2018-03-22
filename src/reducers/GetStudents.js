export default function (state=null,action)
{
    switch (action.type) {
        case 'AllStudents':
    {
        return action.payload;
    }        
            break;
    

    }
    return state;
}

