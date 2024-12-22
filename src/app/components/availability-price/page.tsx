import styles from "./responsiveForm.module.css"
import  Button  from "../button"

const page = () => {
    return (
        <div className={styles.responsiveFormContainer}>
            <div>
            <p>₹1,49,086</p>
            <h2>₹1,00,086/Night</h2>
            </div>
            <div className={styles.customButton} >
                <Button text="Check Availability" disabled={false} bgColor="buttonSquare" />
            </div>
        </div>
    )
}

export default page;