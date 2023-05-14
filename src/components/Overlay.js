

const Overlay = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="overlay">
            {children}
        </div>
    )
}

export default Overlay