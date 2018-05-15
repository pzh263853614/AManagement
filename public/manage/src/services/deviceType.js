import { stringify } from 'qs';
import request from '../utils/request';

export async function queryDeviceTypes() {
  return request('/manage/device_types');
}

export async function queryDeviceType(id) {
  return request(`/manage/device_type?id=${id}`);
}

export async function submitAdd(params) {
  return request('/manage/add_device_type', {
    method: 'POST',
    body: params,
  });
}

export async function submitEdit(params) {
  return request('/manage/edit_device_type', {
    method: 'POST',
    body: params,
  });
}