export interface TeamRegistration {
  teamName: string;
  campus: string;
  students: StudentInfo[];
}

export interface StudentInfo {
  fullName: string;
  email: string;
  studentId: string;
}

export interface SupabaseTeam {
  id?: string;
  nombre_equipo: string;
  sede: string;
  created_at?: string;
}

export interface SupabaseStudent {
  id?: string;
  equipo_id: string;
  nombre_completo: string;
  correo: string;
  matricula: string;
  created_at?: string;
}
