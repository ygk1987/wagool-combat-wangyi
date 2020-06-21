import {reqIndexData} from '../../api/index.js'
import {GETINDEXDATAMUTATION} from '../mutation-types.js'

const state = {
  indexData : {}
}

const mutations = {
  [GETINDEXDATAMUTATION](state, indexData){
    state.indexData = indexData
  }
} 

const actions = {
  async getIndexData({commit}){
    const res = await reqIndexData()
    // console.log(res);
    commit(GETINDEXDATAMUTATION, res);
  }
}

const getters = {}

export default{
	state,
	actions,
	mutations,
	getters
}