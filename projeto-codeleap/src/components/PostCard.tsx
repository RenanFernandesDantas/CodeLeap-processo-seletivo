import { Post } from "../types/Post";

interface PostCardProps {
    post: Post;
    isOwner: boolean;
    onEdit: () => void;
    onDelete: () => void;
}

export function PostCard({ post, isOwner, onEdit, onDelete }: PostCardProps) {
    return (
        <div className = "bg-white p-4 rounded shadow relative">
            <div className = "flex justify-between">
                <h3 className = "font-bold">{post.title}</h3>
                {isOwner && (
                    <div className = "space-x-2">
                        <button onClick = {onEdit} className = "text-white bg-blue-500 py-1 px-2 rounded cursor-pointer">Editar</button>
                        <button onClick = {onDelete} className = "text-white bg-red-500 py-1 px-2 rounded cursor-pointer">Deletar</button>
                    </div>
                )}
            </div>
            <p className = "text-gray-500 text-sm mb-2">@{post.username} - {new Date(post.createdAt).toLocaleString()}</p>
            <p>{post.content}</p>
        </div>
    );
}