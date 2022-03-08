import { FunctionComponent } from "react";

interface InputProps {
    value: any;
    label: any;
    type: any;
    name: any;
    onChange: any;
}

const Input: FunctionComponent<InputProps> = ({name, type, label, value, onChange}) => {
    return (
        <div className="form-group mt-2 mb-2">
            <label>{ label }</label>
            <input name={name} value={value} onChange={onChange} type={type} className="form-control mt-2" aria-describedby="emailHelp" placeholder={'Enter ' + label} />
            <small className="warn">Error Warning Baby</small>
        </div>
    );
}

export default Input;