import React, { ChangeEventHandler, useState } from 'react'

interface CustomerFormData {
    name: string,
    email: string
}

interface ErrorState {
    name?: string,
    email?: string
}

export default function CreateCustomer() {
    const [formData, setFormData] = useState<CustomerFormData>();
    const [errors, setErrors] = useState<any>();

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData: CustomerFormData | undefined) => ({
            ...prevFormData!,
            [e.target.name]: e.target.value
        }))
    }

    const createCustomer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: ErrorState = {};
        if (!formData?.name) {
            newErrors.name = 'Name is required'
        }
        if (!formData?.email) {
            newErrors.email = 'Email is required'
        }
        console.log(errors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(formData)
            setErrors({});
        }
    }

  return (
    <div>
        <h3>Create Customer</h3>
        <form onSubmit={createCustomer}>
            <div className='mb-4'>
                <label className='form-label'>Name</label>
                <input className='form-control' name='name' onChange={onchange}/>
                {errors?.name && <p className='text-danger'>{errors.name}</p>}
            </div>
            <div className='mb-4'>
                <label className='form-label'>Email</label>
                <input className='form-control' name='email' onChange={onchange} />
                {errors?.email && <p className='text-danger'>{errors.email}</p>}
            </div>
            <button type='submit' className='btn btn-primary'>Create</button>
        </form>
    </div>
  )
}
