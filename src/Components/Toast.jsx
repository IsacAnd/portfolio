import toastStyles from '../styles/toast.module.css';

function Toast() {
    return (
        <div className={toastStyles.toastContainer}>
            <div className={toastStyles.toastMessage}>
                <p>Tema alterado!</p>
            </div>
        </div>
    )
}

export default Toast;