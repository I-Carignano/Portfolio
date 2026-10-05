import { useState } from 'react'
import type { FormEvent } from 'react'
import { validateContact } from '../lib/validation'
import type { ContactErrors, ContactFields } from '../lib/validation'

// Clave pública de Web3Forms (se configura en .env.local y en los secretos de GitHub Actions).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

const emptyFields: ContactFields = { name: '', email: '', message: '' }

const inputClass =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/30 aria-[invalid=true]:border-red-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-300 dark:focus:ring-teal-300/30 dark:aria-[invalid=true]:border-red-400'

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const updateField = (name: keyof ContactFields, value: string) => {
    const next = { ...fields, [name]: value }
    setFields(next)
    // Una vez mostrado el error, lo actualizamos mientras el usuario corrige el campo.
    if (errors[name]) setErrors(validateContact(next))
  }

  const handleBlur = (name: keyof ContactFields) => {
    const fieldErrors = validateContact(fields)
    setErrors((current) => ({ ...current, [name]: fieldErrors[name] }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formErrors = validateContact(fields)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setStatus('idle')
      document.getElementById(Object.keys(formErrors)[0])?.focus()
      return
    }

    if (!ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nuevo mensaje de ${fields.name.trim()} desde tu portfolio`,
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      })
      const data = (await response.json()) as { success?: boolean }
      if (!response.ok || !data.success) throw new Error('Envío rechazado')
      setStatus('success')
      setFields(emptyFields)
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-label="Formulario de contacto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => updateField('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClass}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-700 dark:text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => updateField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-700 dark:text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(e) => updateField('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700 dark:text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800 disabled:cursor-wait disabled:opacity-70 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      <p role="status" aria-live="polite" className="text-sm">
        {status === 'success' && (
          <span className="text-teal-800 dark:text-teal-300">¡Gracias! Recibí tu mensaje y te respondo pronto.</span>
        )}
        {status === 'error' && (
          <span className="text-red-700 dark:text-red-300">
            No se pudo enviar el mensaje. Probá de nuevo o escribime por WhatsApp o email.
          </span>
        )}
      </p>
    </form>
  )
}
