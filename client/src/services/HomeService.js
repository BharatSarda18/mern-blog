import { Config } from "./Config";


export const getHomePagePosts = async () =>
  await Config.get(`/api/post/getPosts`);