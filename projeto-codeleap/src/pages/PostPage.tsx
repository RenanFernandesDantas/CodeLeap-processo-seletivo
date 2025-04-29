import { useState } from 'react';
import { Post } from '../types/Post';
import { ModalDelete } from '../components/ModalDelete';
import { ModalEdit } from '../components/ModalEdit';
import { PostCard } from '../components/PostCard';

interface PostPageProps {
    username: string;
}

export function PostPage({ username }: PostPageProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        const newPost: Post = {
            id: Date.now(),
            username,
            title,
            content,
            createdAt: new Date().toISOString(),
        };

        setPosts([newPost, ...posts]);
        setTitle('');
        setContent('');
    };

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
        closeModal();
    };

    const handleEditPost = (id: number, newTitle: string, newContent: string) => {
        setPosts(posts.map(post => 
            post.id === id ? { ...post, title: newTitle, content: newContent } : post
        ));
        closeModal();
    };

    const openEditModal = (post: Post) => {
        setSelectedPost(post);
        setModalType('edit');
    };

    const openDeleteModal = (post: Post) => {
        setSelectedPost(post);
        setModalType('delete');
    };

    const closeModal = () => {
        setSelectedPost(null);
        setModalType(null);
    };

    return (
        <div className = "min-h-screen bg-gray-100 p-6">
            <div className = "max-w-2xl mx-auto">
                <h1 className = "bg-blue-500 text-white p-4 text-lg font-bold">Projeto CodeLeap</h1>

                <form onSubmit = {handleCreatePost} className = "bg-white p-6 mt-4 rounded shadow">
                    <h2 className = "text-lg mb-4">Sobre o que esta pensando?</h2>
                    <input
                        type = "text"
                        placeholder = "Titulo"
                        className = "border p-2 w-full mb-4"
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder = "Conteudo"
                        className = "border p-2 w-full mb-4"
                        rows = {4}
                        value = {content}
                        onChange = {(e) => setContent(e.target.value)}
                    />
                    <button
                        type = "submit"
                        disabled = {!title.trim() || !content.trim()}
                        className = "bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
                    >
                        CRIAR
                    </button>
                </form>

                <div className = "mt-6 space-y-4">
                    {posts.map(post => (
                        <PostCard
                            key = {post.id}
                            post = {post}
                            isOwner = {post.username === username}
                            onEdit = {() => openEditModal(post)}
                            onDelete = {() => openDeleteModal(post)}
                        />
                    ))}
                </div>
            </div>

            {modalType === 'delete' && selectedPost && (
                <ModalDelete
                    onCancel={closeModal}
                    onConfirm={() => handleDeletePost(selectedPost.id)}
                />
            )}

            {modalType === 'edit' && selectedPost && (
                <ModalEdit
                    post={selectedPost}
                    onCancel={closeModal}
                    onSave={handleEditPost}
                />
            )}
        </div>
    );
}