import React, { Component } from 'react';
import { useParams } from "react-router-dom";

class category extends Component {
    render() {
        return (
            <div className="col-md-8">
                <h1 className="my-4">Category</h1>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default category;