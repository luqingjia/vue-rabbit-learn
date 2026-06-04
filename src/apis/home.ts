import httpInstance from "@/utils/http";

type BannerParams = {
  distributionSite?: string;
};

export function getBannerAPI(params: BannerParams = {}) {
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

/**
 * @description: 获取商品
 * @param {*}
 * @return {*}
 */
export const findGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
