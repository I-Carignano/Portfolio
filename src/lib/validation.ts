export type ContactFields = {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {}
  const name = fields.name.trim()
  const email = fields.email.trim()
  const message = fields.message.trim()

  if (name.length < 2) {
    errors.name = 'Escribí tu nombre (mínimo 2 caracteres).'
  } else if (name.length > 80) {
    errors.name = 'El nombre no puede superar los 80 caracteres.'
  }

  if (!email) {
    errors.email = 'Escribí tu email.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Revisá el formato del email, por ejemplo: nombre@dominio.com.'
  }

  if (message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  } else if (message.length > 1000) {
    errors.message = 'El mensaje no puede superar los 1000 caracteres.'
  }

  return errors
}
