import React, { useMemo } from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const BUTTON_BASE_CLASSES = 'group flex items-center justify-center gap-2 h-12 min-w-32 px-6 bg-gray-900 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 hover:bg-gray-950 hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900'

const LOADING_SPINNER_CLASSES = 'h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'

const ICON_CLASSES = 'text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'

interface LoadingSpinnerProps {
  className?: string
}

function LoadingSpinner({ className = LOADING_SPINNER_CLASSES }: LoadingSpinnerProps) {
  return (
    <div className={className} role="status" aria-label="Sending message">
      <span className="sr-only">Sending...</span>
    </div>
  )
}

interface SubmitButtonContentProps {
  isPending: boolean
}

function SubmitButtonContent({ isPending }: SubmitButtonContentProps) {
  if (isPending) {
    return <LoadingSpinner />
  }

  return (
    <>
      Submit
      <FaPaperPlane className={ICON_CLASSES} aria-hidden="true" />
    </>
  )
}

interface SubmitBtnProps {
  className?: string
  children?: React.ReactNode
}

export default function SubmitBtn({ className, children }: SubmitBtnProps) {
  const { pending } = useFormStatus()
  
  const buttonClasses = useMemo(() => {
    const baseClasses = className ? `${BUTTON_BASE_CLASSES} ${className}` : BUTTON_BASE_CLASSES
    return pending ? `${baseClasses} opacity-65` : baseClasses
  }, [className, pending])

  const buttonText = useMemo(() => {
    return pending ? 'Sending...' : 'Send message'
  }, [pending])

  return (
    <button
      type="submit"
      className={buttonClasses}
      disabled={pending}
      aria-disabled={pending}
      aria-describedby="submit-help"
    >
      {children || <SubmitButtonContent isPending={pending} />}
      <span id="submit-help" className="sr-only">
        {buttonText}
      </span>
    </button>
  )
}
