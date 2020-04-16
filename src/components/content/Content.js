import React, { Component } from 'react';
import Postitem from './postitem/Postitem';

class Content extends Component {
    posts = [
        {
            title: 'bài viết số 1',
            imageURL: 'https://sohanews.sohacdn.com/thumb_w/660/2019/9/23/ant-balanci-15692496539101885267130-crop-15692497140051819251272.jpg',
            url: 'bai-viet-so-1',
            desc: 'Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1',
            date: 'January 1, 2017',
            author: 'tuannt'
        }
    ]
    render() {
        return (
            <div className="col-md-8">
                <h1 className="my-4">BLOG BY REACT</h1>
                <Postitem imageURL="https://sohanews.sohacdn.com/thumb_w/660/2019/9/23/ant-balanci-15692496539101885267130-crop-15692497140051819251272.jpg" desc="Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1" url="/single/bai-viet-so-1" date="January 1, 2017" author="tuannt">bài viết số 1</Postitem>
                <Postitem imageURL="https://sohanews.sohacdn.com/thumb_w/660/2019/9/23/ant-balanci-15692496539101885267130-crop-15692497140051819251272.jpg" desc="Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1" url="/single/bai-viet-so-1" date="January 1, 2017" author="tuannt">bài viết số 1</Postitem>
                <Postitem imageURL="https://sohanews.sohacdn.com/thumb_w/660/2019/9/23/ant-balanci-15692496539101885267130-crop-15692497140051819251272.jpg" desc="Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1, Miêu tả bài viết số 1" url="/single/bai-viet-so-1" date="January 1, 2017" author="tuannt">bài viết số 1</Postitem>
                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item">
                        <span className="page-link">← trước</span>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">Sau →</span>
                    </li>
                </ul>
            </div>
        );

    }
}

export default Content;