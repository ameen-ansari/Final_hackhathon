import React from 'react'
import style from './Services.module.css'
import logo from '../../assets/logo.jpg'

function Services() {
    return (
        <div className={style.parent}>
            <h2 className='text-center my-5'>Explore Products</h2>
            <div className={style.input}>
                <div className="container my-2 input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Products by Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Search</span>
                    </div>
                </div>
            </div>
                <h2 className='text-center my-5'>Products</h2>
            <div className='container d-flex mb-2 flex-wrap gap-4 justify-content-center'>
                <div className="card" style={{ width: '25rem' }}>
                    <img style={{ maxWidth: '25rem', height: '15rem' }} className="card-img-top" src={logo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><b>99$</b></p>
                        <p className="btn btn-primary">Add to Cart</p>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem' }}>
                    <img style={{ width: '25rem', height: '15rem' }} className="card-img-top" src={logo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><b>99$</b></p>
                        <p className="btn btn-primary">Add to Cart</p>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem' }}>
                    <img style={{ width: '25rem', height: '15rem' }} className="card-img-top" src={logo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><b>99$</b></p>
                        <p className="btn btn-primary">Add to Cart</p>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem' }}>
                    <img style={{ width: '25rem', height: '15rem' }} className="card-img-top" src={logo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><b>99$</b></p>
                        <p className="btn btn-primary">Add to Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services