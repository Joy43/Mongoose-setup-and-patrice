import { Request, Response } from "express";
import { Student } from './student.interface';
import { StudentService } from "./student.service";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student: Student = req.body; // Ensure req.body matches Student interface
    // Call service function to send this data
    const result = await StudentService.createStudentIntDB(student);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result, // Fixed key name from `date` to `data`
    });
  } catch (err) {
    console.error(err); // Use `console.error` for errors
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the student',
    });
  }
};
