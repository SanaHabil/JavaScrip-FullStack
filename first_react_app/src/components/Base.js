import styles from '../static/Base.module.css'

const Base = (props) => {
    return (
    <div>
        <div className={styles.container}>

        {props.children}
        </div>

    </div>
    )
}

export default Base