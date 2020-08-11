import React, { useEffect, useState } from 'react';
import { AddWeibo } from '../../api/models'

const Home = function () {
    const [content, setContent] = useState('')
    const [weiboList, setWeiboList] = useState([])
    // useEffect(() => {
    //     fetch('/wb/mylist')
    //         .then(res => setWeiboList(res.data.list))
    // })
    const submitWeibo = async () => {
        const res = await AddWeibo({ content })
        alert(res.data.msg)
    }
    return <div>
        <form action="" method="get" className="form-example">
            <div className="form-example">
                <label htmlFor="content">内容: </label>
                <textarea value={content} onChange={e => setContent(e.target.value)} name="content" id="content" required></textarea>
            </div>
            <div className="form-example">
                <input onClick={submitWeibo} type="button" id='add' value="发表" />
            </div>
        </form>
        <ul>

        </ul>
    </div>
}

export default Home