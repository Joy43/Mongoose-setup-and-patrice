import { Student } from './student.interface';
import { StudentModel } from "./student.module";

const createStudentIntDB=async(student:Student)=>{
    const result =await StudentModel.create(student);
    return result;
}
export  const StudentService={
    createStudentIntDB
}