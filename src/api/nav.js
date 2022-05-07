/**
 * 用户模块接口列表
 */

import axios from '@/request/http'; // 导入http中创建的axios实例
import base from "./base.js"
const navApi = {
    /**
     * 获取导航栏标签
     */
    getNavTags() {
        let url = base.dev + '/api/common/getNavTags'
        return axios.get(url)
    },
    /**
    * 获取标签对应内容
    * @param {tagId} String 
    * 
    */
    getNavTagDetail(params) {
        let url = base.dev + '/api/common/getNavTagDetail'
        return axios.get(url, params)
    },
    /**
    * 获取角色/活动详情
    * @param {idd} String 
    * 
    */
    getDetail(params) {
        let url = base.dev + '/api/common/getDetail'
        return axios.get(url, params)
    }
}

export default navApi;