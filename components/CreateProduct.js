import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
    const { inputs, handleChange } = useForm({
        image: '',
        name: 'heyyy',
        price: 123,
        description: 'yoooooo, description'
    });

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs);
        }}>
            <fieldset>
                <label htmlFor="name">
                    Image
                    <input
                        required
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />  
                </label>
                <label htmlFor="name">
                    Name
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />  
                </label>
                <label htmlFor="price">
                    Price
                    <input
                        required
                        type="number"
                        id="price"
                        name="price"
                        placeholder="price"
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea
                        required
                        id="description"
                        name="description"
                        placeholder="Enter product description"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">+ Add Product</button>
            </fieldset>
        </Form>
    )
}
