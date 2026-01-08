import type { Student, CreateStudentDTO, UpdateStudentDTO } from '@/types/student.type';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const studentService = {
    // Get all students
    async getAll(): Promise<Student[]> {
        const response = await fetch(`${API_URL}/students`);
        const data = await response.json();
        return data.students;
    },

    // Get student by ID
    async getById(id: string): Promise<Student> {
        const response = await fetch(`${API_URL}/students/${id}`);
        const data = await response.json();
        return data.student;
    },

    // Create new student
    async create(student: CreateStudentDTO): Promise<Student> {
        const response = await fetch(`${API_URL}/students`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        const data = await response.json();
        return data.data;
    },

    // Update student
    async update(id: string, student: UpdateStudentDTO): Promise<Student> {
        const response = await fetch(`${API_URL}/students/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        const data = await response.json();
        return data.data;
    },

    // Delete student
    async delete(id: string): Promise<void> {
        await fetch(`${API_URL}/students/${id}`, {
            method: 'DELETE',
        });
    },
};
