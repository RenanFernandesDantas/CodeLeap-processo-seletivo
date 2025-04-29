interface LoginPageProps {
    setUsername: (username: string) => void
  }
  
  function LoginPage({ setUsername }: LoginPageProps) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const input = form.elements.namedItem('username') as HTMLInputElement
      if (input.value.trim()) {
        setUsername(input.value.trim())
      }
    }
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome to CodeLeap Network!</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1 text-sm font-medium">Please enter your username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Enter
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default LoginPage
  