export const REGEX_PATTERNS = {
  nombre: /^(?=.{2,30}$)[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
};
