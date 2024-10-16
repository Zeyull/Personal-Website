// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改公告 PUT /miku/announcement */
export async function updateAnnouncement(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAnnouncementParams,
  body: API.UpdateAnnouncementData,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UpdateAnnouncementResponse>('/miku/announcement', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 新增公告 POST /miku/announcement */
export async function addAnnouncement(
  body: API.AddAnnouncementData,
  options?: { [key: string]: any },
) {
  return request<API.AddAnnouncementResponse>('/miku/announcement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除公告 DELETE /miku/announcement */
export async function deleteAnnouncement(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAnnouncementParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeleteAnnouncementResponse>('/miku/announcement', {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取公告列表 GET /miku/announcements-list */
export async function getAnnouncementsList(options?: { [key: string]: any }) {
  return request<API.AnnouncementListResponse>('/miku/announcements-list', {
    method: 'GET',
    ...(options || {}),
  });
}
