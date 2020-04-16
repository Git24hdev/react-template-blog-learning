import React, { Component } from 'react';
import Catlistitem from './catelistitem/catlistitem';

class CategoryList extends Component {
    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <Catlistitem url="/category/category-01">Category 01</Catlistitem>
                                <Catlistitem url="/category/category-02">Category 02</Catlistitem>
                                <Catlistitem url="/category/category-03">Category 03</Catlistitem>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <Catlistitem url="/category/category-04">Category 04</Catlistitem>
                                <Catlistitem url="/category/category-05">Category 05</Catlistitem>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryList;