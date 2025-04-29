interface HomePageProps {
    username: string
  }
  
  function HomePage({ username }: HomePageProps) {
    return (
      <div className="flex flex-col items-center p-6">
        <header className="w-full bg-blue-500 text-white p-4 text-lg font-semibold">
          CodeLeap Network
        </header>
  
        <main className="w-full max-w-2xl mt-6">
          <h2 className="text-xl font-bold mb-4">Hello, {username}!</h2>
  
          {/* Aqui depois podemos colocar lista de posts, botões de criar, editar, deletar */}
          <p className="text-gray-600">Your posts will appear here.</p>
        </main>
      </div>
    )
  }
  
  export default HomePage
  