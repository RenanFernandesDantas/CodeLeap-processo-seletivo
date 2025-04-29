interface ModalDeleteProps {
    onCancel: () => void;
    onConfirm: () => void;
}

export function ModalDelete({ onCancel, onConfirm }: ModalDeleteProps) {
    return (
        <div className = "fixed inset-0 flex items-center justify-center bg-black opacity-94">
            <div className = "bg-white p-6 rounded">
                <p className = "mb-4">Voce tem certeza que deseja deletar este item?</p>
                <div className = "flex justify-end space-x-2">
                    <button onClick = {onCancel} className = "px-4 py-2 bg-gray-300 rounded cursor-pointer">Cancelar</button>
                    <button onClick = {onConfirm} className = "px-4 py-2 bg-red-500 text-white rounded cursor-pointer">Deletar</button>
                </div>
            </div>
        </div>
    );
}