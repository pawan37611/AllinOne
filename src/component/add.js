import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {GetAllStudents} from '../action/index'
import { bindActionCreators } from 'redux';

class Add extends Component{
  
constructor(props)
{
    super(props);
    this.state={status:""};
}

    componentDidMount()
    {
        this.props.GetAllStudents();

    }
    renderField(field){
        return(
            <div>
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type='text' 
                {...field.input}
                />
                {field.meta.touched?field.meta.error:""}
            </div>
             
          </div>
        )
    }
    onSubmit(values)
    {
        var stud;
        if(this.props.students)
        stud=JSON.parse(this.props.students);
        else
        stud=[];

        stud.push(values);
        localStorage.setItem("student",JSON.stringify(stud));
        this.setState({status:"Student Added Successfully"});
        this.props.GetAllStudents();
    }
    render()
    {
        const {handleSubmit}=this.props;
        return (
            <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>    
            <Field label="Full Name" name="name" component={this.renderField} onFocus={()=>{this.setState({status:""})}}/>
            <Field label="Age"  name="age" component={this.renderField} onFocus={()=>{this.setState({status:""})}}/>
           
            <button type="submit" className="btn btn-primary">Submit</button>  
                 </form>
                  <Link to={`/`}>
                  Student List
                  </Link>
                  <p>{this.state.status}</p>
                  </div>
        )
    }

}
function validate(values){

const errors={};

if(!values.name)
{
    errors.name="Name field is empty";
}
if(!values.age)
{
    errors.age="Age field is empty";
}

return errors;
}
Add= reduxForm({
    validate,
    form:'AddStudent'
}) (Add); 

function mapStatesToProps(state) {
    return {
        students: state.students    
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ GetAllStudents }, dispatch);
}

Add = connect(
    mapStatesToProps,
    mapDispatchToProps
 )(Add);
 
 export default Add