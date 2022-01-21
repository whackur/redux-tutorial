import axios from "axios";

export const getNaverQueryKeyword = async (keyword) => {
  const response = await axios.get(`https://asr.hakhub.net/naver/q?keyword=${keyword}&display=100&start=1`)
  return response.data;
}