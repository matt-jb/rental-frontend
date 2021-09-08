import useForm from '../lib/useForm';
import Form from './styles/Form';
import { useMutation } from '@apollo/client';
import gql from "graphql-tag";
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products'
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        $name: String!
        $description: String!
        $priceBuy: Int!
        $priceRent: Int!
        $image: Upload
    ) {
        createProduct(
            data: {
                name: $name
                description: $description
                priceBuy: $priceBuy
                priceRent: $priceRent
                status: "AVAILABLE"
                photo: { create: { image: $image, altText: $name } }
            }
        ) {
            id
            priceBuy
            priceRent
            description
            name
        }
    }
`;

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'heyyy',
        priceBuy: 12300,
        priceRent: 123,
        description: 'yoooooo, description'
    });

    const [createProduct, { loading, error, data }] = useMutation(
        CREATE_PRODUCT_MUTATION,
        {
          variables: inputs,
          refetchQueries: [{ ALL_PRODUCTS_QUERY }]
        }
      );

    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await createProduct();
            clearForm();
            Router.push({
                pathname: `product/${res.data.createProduct.id}`
            })
        }}>
            <DisplayError error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
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
                <label htmlFor="priceBuy">
                    Price - Buy
                    <input
                        required
                        type="number"
                        id="priceBuy"
                        name="priceBuy"
                        placeholder="priceBuy"
                        value={inputs.priceBuy}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="priceRent">
                    Price - Rent
                    <input
                        required
                        type="number"
                        id="priceRent"
                        name="priceRent"
                        placeholder="priceRent"
                        value={inputs.priceRent}
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
