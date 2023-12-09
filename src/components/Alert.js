import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* A simple primary alert—check it out! */}
        <button type='button' className='btn-close' data-bs-dismiss="alert" aria-alert="Close"></button>
    </div>      
  )
}

export default Alert
