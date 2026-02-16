import { Injectable } from '@angular/core';
import { TeamRegistration, SupabaseTeam, SupabaseStudent } from '../interfaces/team-registration.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  // 🔧 Credenciales cargadas desde variables de entorno
  private readonly SUPABASE_URL = environment.supabase.url;
  private readonly SUPABASE_ANON_KEY = environment.supabase.anonKey;

  constructor() {
    if (this.SUPABASE_URL === 'TU_SUPABASE_URL') {
      console.warn('⚠️ Supabase no configurado. Agrega tus credenciales en supabase.service.ts');
    }
  }

  async registerTeam(registration: TeamRegistration): Promise<{ success: boolean; message: string; teamId?: string }> {
    try {
      // Validaciones
      if (!registration.teamName || registration.teamName.trim().length === 0) {
        return { success: false, message: 'El nombre del equipo es obligatorio' };
      }

      if (registration.students.length < 3 || registration.students.length > 5) {
        return { success: false, message: 'El equipo debe tener entre 3 y 5 integrantes' };
      }

      // Verificar credenciales
      if (this.SUPABASE_URL === 'TU_SUPABASE_URL') {
        return { success: false, message: 'Supabase no está configurado. Contacta al administrador.' };
      }

      // 1. Insertar equipo
      const teamData: SupabaseTeam = {
        nombre_equipo: registration.teamName,
        sede: registration.campus
      };

      const teamResponse = await fetch(`${this.SUPABASE_URL}/rest/v1/equipos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${this.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(teamData)
      });

      if (!teamResponse.ok) {
        const error = await teamResponse.text();
        console.error('Error al crear equipo:', error);
        return { success: false, message: 'Error al registrar el equipo' };
      }

      const teamResult: SupabaseTeam[] = await teamResponse.json();
      const teamId = teamResult[0]?.id;

      if (!teamId) {
        return { success: false, message: 'Error: No se pudo obtener el ID del equipo' };
      }

      // 2. Insertar estudiantes
      const studentsData: SupabaseStudent[] = registration.students.map(student => ({
        equipo_id: teamId,
        nombre_completo: student.fullName,
        correo: student.email,
        matricula: student.studentId
      }));

      const studentsResponse = await fetch(`${this.SUPABASE_URL}/rest/v1/participantes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${this.SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(studentsData)
      });

      if (!studentsResponse.ok) {
        const error = await studentsResponse.text();
        console.error('Error al crear participantes:', error);
        return { success: false, message: 'Error al registrar los participantes' };
      }

      return {
        success: true,
        message: '¡Registro exitoso! Tu equipo ha sido inscrito correctamente.',
        teamId
      };

    } catch (error) {
      console.error('Error en registerTeam:', error);
      return { success: false, message: 'Error inesperado. Por favor intenta de nuevo.' };
    }
  }
}
