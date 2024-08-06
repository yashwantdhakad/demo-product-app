import React, { useState } from 'react';

interface ProductFormData {
    productName: string;
    price: number;
}

interface ErrorState {
    productName?: string;
    price?: string;
}

const CreateProduct: React.FC = () => {
    const [formData, setFormData] = useState<ProductFormData>({
        productName: '',
        price: 0,
    });

    const [errors, setErrors] = useState<ErrorState>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: ErrorState = {};
        if (!formData.productName) {
            newErrors.productName = 'Product Name is required';
        }
        if (formData.price <= 0) {
            newErrors.price = 'Price must be greater than zero';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Form Data:', formData);
            alert(`Product Name: ${formData.productName}, Price: ${formData.price}`);
            // Clear form
            setFormData({ productName: '', price: 0 });
        }
    };

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='form-label'>Product Name</label>
                    <input
                        type="text"
                        className='form-control'
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                    />
                    {errors.productName && <p className='text-danger'>{errors.productName}</p>}
                </div>
                <div className='mb-4'>
                    <label className='form-label'>Price</label>
                    <input
                        type="number"
                        className='form-control'
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    {errors.price && <p className='text-danger'>{errors.price}</p>}
                </div>
                <button className='btn btn-primary' type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
