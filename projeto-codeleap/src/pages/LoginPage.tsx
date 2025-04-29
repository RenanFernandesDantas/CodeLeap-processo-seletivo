import { useState } from "react";

interface LoginPageProps {
    onLogin: (username: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username);
        }
    };

    return (
        <div className = "flex justify-center mt-55">
            <form className = "bg-white p-8 rounded shadow-xl" onSubmit = {handleSubmit}>
                <h2 className = "mb-4 text-x1 font-bold">Bem vindo!</h2>
                <input 
                    type = "text"
                    placeholder = "Insira seu nome de usuario"
                    className = "border p-2 w-full mb-4"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <button
                    type = "submit"
                    disabled = {!username.trim()}
                    className = "bg-blue-500 text-white py-2 px-4 ml-45 block rounded disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
                >
                    CONFIRMAR
                </button>
            </form>
        </div>
    );
}