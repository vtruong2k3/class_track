// Attendance types
export interface AttendanceRecord {
    id: string;
    studentId: string;
    date: Date;
    status: 'present' | 'absent' | 'late';
    note?: string;
}

export interface CreateAttendanceDTO {
    studentId: string;
    date: Date;
    status: 'present' | 'absent' | 'late';
    note?: string;
}

export interface UpdateAttendanceDTO extends Partial<CreateAttendanceDTO> { }
