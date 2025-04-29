import { useState } from "react";
import { Post } from "../types/Post";

interface ModalEditProps {
    post: Post;
    onCancel: () => void;
    onSave: (id: number, title: string, content: string) => void;
}

export function ModalEdit({ post, onCancel, onSave }: ModalEditProps) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSave = () => {
        onSave(post.id, title, content);
    };

    return (
        <div className = "fixed inset-0 flex items-center justify-center bg-black opacity-94">
            <div className = "bg-white p-6 rounded shadow w-full max-w-md">
                <h2 className = "text-lg mb-4 font-bold">Editar item</h2>
                <input
                    type = "text"
                    className = "border p-2 w-full mb-4"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <textarea
                    className = "border p-2 w-full mb-4"
                    rows = {4}
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                />
                <div className = "flex justify-end space-x-2">
                    <button onClick = {onCancel} className = "px-4 py-2 bg-gray-300 rounded cursor-pointer">Cancelar</button>
                    <button onClick = {handleSave} className = "px-4 py-2 bg-green-500 text-white rounded cursor-pointer">Salvar</button>
                </div>
            </div>
        </div>
    );
}