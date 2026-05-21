export class Usuario {
  constructor(public nombre: string, public email: string) {}

  validarEmail(): boolean {
    return this.email.includes("@");
  }
}

export class UsuarioRepositorio {
  guardar(usuario: Usuario): void {
    console.log(`Guardando ${usuario.nombre} en BD`);
  }

  cargar(id: string): Usuario | null {
    // Lógica para cargar usuario desde BD
    return null;
  }
}

export class EmailService {
  enviarEmail(usuario: Usuario, mensaje: string): void {
    console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
  }
}

export function ejemploSRP(): void {
  const usuario = new Usuario("Juan", "juan@email.com");
  const repositorio = new UsuarioRepositorio();
  const emailService = new EmailService();

  if (usuario.validarEmail()) {
    repositorio.guardar(usuario);
    emailService.enviarEmail(usuario, "Bienvenido!");
  }
}
