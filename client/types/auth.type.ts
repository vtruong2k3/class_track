// Auth types
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'teacher' | 'student';
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface RegisterDTO {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'teacher' | 'student';
}

export interface AuthResponse {
    user: User;
    token: string;
}
