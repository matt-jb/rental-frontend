import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            id
            name
            description
            priceBuy
            priceRent
        }
    }
`

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $priceBuy: Int
        $priceRent: Int
        ) {
            updateProduct(
                id: $id,
                data: {
                    name: $name,
                    description: $description,
                    priceBuy: $priceBuy,
                    priceRent: $priceRent
                }
            ) {
                id
                name
                description
                priceBuy
                priceRent
            }
    }
`

export default function UpdateProduct({ id }) {
    const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, { variables: { id } });
    const [ updateProduct, { data: updateData, error: updateError, loading: updateLoading } ] = useMutation(UPDATE_PRODUCT_MUTATION);
    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
    
    if (loading) return <p>Loading...</p>
    
    return (
        <Form
        onSubmit={async (e) => {
            e.preventDefault();
            const res = updateProduct({
                variables: {
                    id,
                    name: inputs.name,
                    description: inputs.description,
                    priceBuy: inputs.priceBuy,
                    priceRent: inputs.priceRent
                }
            });
        }}
        //     const res = await createProduct();
        //     clearForm();
        //     Router.push({
        //         pathname: `product/${res.data.createProduct.id}`
        //     })
        // }}
        >
            <DisplayError error={error || updateError}/>
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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

                <button type="submit">Update Product</button>
            </fieldset>
        </Form>
    )

    return <p>Updating product: {id}!</p>
}
