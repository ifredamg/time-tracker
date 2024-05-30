import './css/inputs.css';
import classNames from "classnames";

function InputText({ className, ...rest }) {
    const finalClassNames = classNames('input-ghost-mode', className)
    return (
        <input type="text" className={finalClassNames} {...rest} />
    );
}

export default InputText;