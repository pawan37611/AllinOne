export function GetAllStudents()
{
    var students=localStorage.getItem("student");
    return(
        {
            type:'AllStudents',
            payload:students
        }
    )
}