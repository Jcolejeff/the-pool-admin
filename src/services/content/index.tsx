import API from '../index';
import { getContentInterface, getSingleContentInterface } from './content.types';

const getContent = async (params: getContentInterface) => {
  const { data } = await API.get(`/contents`, {
    params: {
      ...params,
      is_published: true,
    },
  });

  return data;
};

const getSingleContent = async (params: getSingleContentInterface) => {
  const { data } = await API.get(`/contents/${params?.id}`, {
    params: {
      organization_id: params?.organization_id,
    },
  });

  return data;
};

const contentService = {
  getContent,
  getSingleContent,
};

export default contentService;
