export function FormFild({ id, label, value, onChange, inputMode, autoComplete }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                <input
                    id={id}
                    name={id}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    inputMode={inputMode}
                    autoComplete={autoComplete}

                />
            </label>
        </div>
    )
}