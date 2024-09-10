import React, { useState, useEffect } from 'react';
import { Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { commentProduct, getproductById } from '../../actions/ProductAction';
import {useParams} from 'react-router-dom'

import AllComment from './AllComment';

function CommentProduct(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const allComment = useSelector(state => state.getProductById.product.comments)
  const {userInfo} = useSelector(state => state.userSignin)
  
  const Comment = () => {
    if(userInfo){
      const comment = {
        author: userInfo.name,
        isAdmin: userInfo.isAdmin,
        content: value,
        byUser: userInfo._id,
      }
      dispatch(commentProduct(id, comment))
      setValue('')
    }
    else alert('Đăng nhập đi bạn êiiiii')
  }
  useEffect(() => {
    dispatch(getproductById(id))
  }, [])

    return (
      <div className='comment'>
        <Col span={18} align='start' style={{ alignItems:'center'}} xs={24} sm={24} md={18}>
        </Col>

        <AllComment allComment={allComment}></AllComment>
      </div>

    )
}

export default CommentProduct;