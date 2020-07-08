import path from '@/api/index'
import {
  axios
} from '@/utils/request'
import parsePageParams from '@/utils/page'

/**
 * 当前用户任务
 * @param data
 * @returns {AxiosPromise}
 */
export function listTasksCurrentUser (data) {
  return axios({
    url: path.process + '/extend/task/list',
    method: 'POST',
    data: {
      ...parsePageParams(data),
      'assignment': 'involved',
      'includeProcessInstance': true,
      'sort': 'desc',
      'state': 'open',
      ...data
    }
  })
}

/**
 * 当前用户流程实例
 * @param data
 * @returns {AxiosPromise}
 */
export function listProcessInstancesCurrentUser (data) {
  return axios({
    url: path.process + '/extend/runtime/process-instance/list',
    method: 'POST',
    data: { ...parsePageParams(data), ...data }
  })
}

/**
 * 流程定义
 * @returns {AxiosPromise}
 */
export function listProcessDefinitions () {
  return axios({
    url: path.process + '/extend/definition/list',
    method: 'POST',
    params: { 'latest': true }
  })
}

/**
 * 流程启动表单变量信息
 * @param id
 * @returns {AxiosPromise}
 */
export function startForm (id) {
  return axios({
    url: path.process + '/extend/form/process-definition/' + id + '/start-form',
    method: 'GET'
  })
}

/**
 * 启动流程
 * @param data
 * @returns {AxiosPromise}
 */
export function startProcessInstance (data) {
  return axios({
    url: path.process + '/extend/runtime/process-instances/start',
    method: 'POST',
    data: data
  })
}

/**
 * 操作-获取任务
 * @param data
 * @returns {AxiosPromise}
 */
export function claimTask (taskId) {
  return axios({
    url: path.process + '/extend/task/claim/' + taskId,
    method: 'PUT'
  })
}
