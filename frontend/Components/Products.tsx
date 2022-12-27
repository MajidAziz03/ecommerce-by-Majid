import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularProducts } from "./data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
type ProductedProps = {
    category: string,
    filters: {},
    sort: string,
}


const Products = ({ category, filters, sort }: ProductedProps) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category
                    ? `http://localhost:5000/api/products?category=${category}`
                    : "http://localhost:5000/api/products")
                setProducts(res.data)
            } catch (error) {
                console.log("Error in getting products", error)
            }
        }
        getProducts()
    }, [category])


    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item: any) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            )
    }, [products, category, filters])

    console.log(filteredProducts, "filteered products1")

    return (
        <Container>
            {
                filteredProducts.map((item: any) => (
                    <Product item={item} key={item.id} />
                ))
            }
        </Container>
    )
}

export default Products;


