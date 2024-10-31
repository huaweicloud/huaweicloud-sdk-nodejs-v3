import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SwrRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://swr-api.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://swr-api.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://swr-api.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://swr-api.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://swr-api.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://swr-api.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://swr-api.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://swr-api.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://swr-api.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://swr-api.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://swr-api.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://swr-api.cn-southwest-2.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://swr-api.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://swr-api.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://swr-api.sa-brazil-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://swr-api.cn-north-9.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://swr-api.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://swr-api.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://swr-api.tr-west-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://swr-api.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://swr-api.eu-west-101.myhuaweicloud.eu"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://swr-api.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://swr-api.my-kualalumpur-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://swr-api.me-east-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://swr-api.eu-west-0.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":SwrRegion.AF_SOUTH_1,
        "ap-southeast-1":SwrRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":SwrRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":SwrRegion.AP_SOUTHEAST_3,
        "cn-east-2":SwrRegion.CN_EAST_2,
        "cn-east-3":SwrRegion.CN_EAST_3,
        "cn-north-1":SwrRegion.CN_NORTH_1,
        "cn-north-2":SwrRegion.CN_NORTH_2,
        "cn-north-4":SwrRegion.CN_NORTH_4,
        "cn-south-1":SwrRegion.CN_SOUTH_1,
        "cn-south-2":SwrRegion.CN_SOUTH_2,
        "cn-southwest-2":SwrRegion.CN_SOUTHWEST_2,
        "ru-northwest-2":SwrRegion.RU_NORTHWEST_2,
        "la-south-2":SwrRegion.LA_SOUTH_2,
        "sa-brazil-1":SwrRegion.SA_BRAZIL_1,
        "cn-north-9":SwrRegion.CN_NORTH_9,
        "na-mexico-1":SwrRegion.NA_MEXICO_1,
        "la-north-2":SwrRegion.LA_NORTH_2,
        "tr-west-1":SwrRegion.TR_WEST_1,
        "ae-ad-1":SwrRegion.AE_AD_1,
        "eu-west-101":SwrRegion.EU_WEST_101,
        "ru-moscow-1":SwrRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":SwrRegion.MY_KUALALUMPUR_1,
        "me-east-1":SwrRegion.ME_EAST_1,
        "eu-west-0":SwrRegion.EU_WEST_0
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
