import React, { useState } from 'react'
import style from './AddService.module.css'
import axios from 'axios'

function AddServices() {
    const defaultValue = {
        name: "",
        catagory: "",
        description: "",
        color: "",
        size: "",
        prize: "",
        quantity: "",
    }
    let [values, setvalues] = useState(defaultValue)
    const [form, setform] = useState(false)
    let sampleData = {
        name: 'reshmi Suit',
        catagory: 'clothes',
        price: '2$',
    }
    let sampleData2 = {
        name: 'ameen',
        product: 'clothes',
        rs: '2$',
        quantity: '500',
    }
    let data = [
        sampleData,
        sampleData,
        sampleData,
        sampleData,
    ]
    let data2 = [
        sampleData2,
        sampleData2,
        sampleData2,
        sampleData2,
    ]
    function valuesH(e) {
        let inputs = { [e.target.name]: e.target.value }
        setvalues({ ...values, ...inputs })
    }
    const submitH = async () => {
        try {
            let res = await axios.post('http://localhost:800/addpro', values)
            alert(res.data.message)
        } catch (error) {
            alert(error)
        }

    }
    return (
        <div className={style.parent}>
            <h2 className='text-center my-3'>Admin Panel</h2>
            <div className='container mt-5 d-flex justify-content-between'>
                <h2 className=''>Products</h2>
                <button className='btn btn-primary' onClick={
                    () => {
                        setform(!form)
                    }
                }>Add Product</button>
            </div>
            <div className='container mt-4'>
                <table className='table'>
                    <tr className='p-4'>
                        <th className='p-2'>Product Name</th>
                        <th className='p-2'>Product Catagory</th>
                        <th className='p-2'>Product Price</th>
                        <th className='p-2'>Action</th>
                    </tr>
                    {
                        data.map((item, i) => {
                            return (
                                <tr className='p-4' key={i}>
                                    <td className='p-2'>{item.name}</td>
                                    <td className='p-2'>{item.catagory}</td>
                                    <td className='p-2'>{item.price}</td>
                                    <td className='p-2'><button className='btn btn-primary'>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <h2 className='p-5 my-3 text-center'>Orders</h2>
            <div className='container mt-4'>
                <table className='table'>
                    <tr className='p-4'>
                        <th className='p-2'>Customer</th>
                        <th className='p-2'>product</th>
                        <th className='p-2'>Quantity</th>
                        <th className='p-2'>Price</th>
                        <th className='p-2'>Action</th>
                    </tr>
                    {
                        data2.map((item, i) => {
                            return (
                                <tr className='p-4' key={i}>
                                    <td className='p-2'>{item.name}</td>
                                    <td className='p-2'>{item.product}</td>
                                    <td className='p-2'>{item.quantity}</td>
                                    <td className='p-2'>{item.rs}</td>
                                    <td className='p-2'><button className='btn btn-primary'>approve</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            {
                form ?
                    <div className={`${style.adddata} d-flex flex-column gap-4`}>
                        <h3>Add Product </h3>
                        <input onChange={valuesH} name='name' value={values.name} type="text" className="form-control" placeholder="Enter the Product Name" ar ia-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='catagory' value={values.catagory} type="text" className="form-control" placeholder="Enter Catagary" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='description' value={values.description} type="text" className="form-control" placeholder="Enter Description" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='color' value={values.color} type="text" className="form-control" placeholder="Enter Color" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='size' value={values.size} type="text" className="form-control" placeholder="Enter Size" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='prize' value={values.prize} type="number" className="form-control" placeholder="Enter Price" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='quantity' value={values.quantity} type="number" className="form-control" placeholder="Enter Quantity" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input onChange={valuesH} name='img' value={values.img} type="file" className="form-control" placeholder="Add Image" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button onClick={
                            () => {
                                setform(!form)
                                submitH()
                                console.log(values);
                            }
                        } className='btn btn-primary'>Submit</button>
                    </div> : null}

        </div>
    )
}

export default AddServices