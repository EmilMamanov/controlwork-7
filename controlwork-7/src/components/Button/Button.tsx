function Button({ text, onClick, className }: { text: string; onClick: () => void; className?: string }) {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;