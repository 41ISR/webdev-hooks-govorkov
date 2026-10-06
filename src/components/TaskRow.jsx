const TaskRow = () => {
    return (
        <div className="task-row">
            <button className="task-check"></button>
            <span className="task-title">
                Migrate onboarding flow to new design
            </span>
            <div className="estimate-stepper">
                <button className="stepper-btn">−</button>
                <span className="stepper-value">3</span>
                <button className="stepper-btn">+</button>
            </div>
            <button className="quick-bump">+2</button>
            <button className="icon-danger">✕</button>
        </div>
    )
}

export default TaskRow