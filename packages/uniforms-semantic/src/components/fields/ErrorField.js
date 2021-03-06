import React          from 'react';
import {connectField} from 'uniforms';

const Error = ({
    children,
    errorMessage,
// onChange shouldn't be passed to <section>
// eslint-disable-next-line no-unused-vars
    onChange,
    ...props
}) =>
    !errorMessage ? null : (
        <section {...props}>
            {children || errorMessage}
        </section>
    )
;

export default connectField(Error);
