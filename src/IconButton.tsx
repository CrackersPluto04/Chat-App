import "./IconButton.css";

export type IconButtonProps = {
    iconName?: string;
    content?: string;
    onClick?: () => void;
}

export function IconButton({ iconName, content, onClick }: IconButtonProps) {
    return <button type="button" class="IconButton" onClick={onClick}>
        <span class="material-symbols-outlined">{iconName}</span>
        {content}
    </button>
}