// Student types
export interface Student {
    id: string;
    name: string;
    email: string;
    class: string;
    enrollmentDate: Date;
}

export interface CreateStudentDTO {
    name: string;
    email: string;
    class: string;
}

export interface UpdateStudentDTO extends Partial<CreateStudentDTO> { }
