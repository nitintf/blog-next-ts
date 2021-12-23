import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Categories, PostWidget } from "../../components";


// import { getPosts, getPostDetails } from '../../services'
// import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostPage: NextPage = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments/>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage;
