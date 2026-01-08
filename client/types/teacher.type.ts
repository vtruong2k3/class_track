// Teacher types
export interface Teacher {
    id: string;
    name: string;
    email: string;
    subject: string;
    hireDate: Date;
}

export interface CreateTeacherDTO {
    name: string;
    email: string;
    subject: string;
}

export interface UpdateTeacherDTO extends Partial<CreateTeacherDTO> { }
