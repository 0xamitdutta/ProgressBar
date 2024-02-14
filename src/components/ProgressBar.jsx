import '../App.css'

const ProgressBar = ({ value = 0 }) => {
    // Ensure value is between 0 and 100
    const clampedValue = Math.min(Math.max(value, 0), 100);

    return (
        <div>
            <div className='progress'>
                <div style={{width: `${clampedValue}%`}}></div>
                <span>{clampedValue}%</span>
            </div>
        </div>
    )
}

export default ProgressBar