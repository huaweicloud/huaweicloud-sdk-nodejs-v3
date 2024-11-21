import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DataArtsStudioRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dayu.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dayu.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dayu.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dayu.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dayu.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dayu.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dayu.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dayu.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dayu.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dayu.af-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dayu.ru-northwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dayu.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dayu.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dayu.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dayu.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dayu.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dayu.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dayu.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dayu.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dayu.me-east-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dayu.eu-west-101.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dayu.ae-ad-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://dayu.cn-north-11.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":DataArtsStudioRegion.CN_NORTH_1,
        "cn-north-2":DataArtsStudioRegion.CN_NORTH_2,
        "cn-north-4":DataArtsStudioRegion.CN_NORTH_4,
        "cn-east-3":DataArtsStudioRegion.CN_EAST_3,
        "cn-east-2":DataArtsStudioRegion.CN_EAST_2,
        "cn-south-1":DataArtsStudioRegion.CN_SOUTH_1,
        "ap-southeast-1":DataArtsStudioRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DataArtsStudioRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":DataArtsStudioRegion.AP_SOUTHEAST_3,
        "af-south-1":DataArtsStudioRegion.AF_SOUTH_1,
        "ru-northwest-2":DataArtsStudioRegion.RU_NORTHWEST_2,
        "sa-brazil-1":DataArtsStudioRegion.SA_BRAZIL_1,
        "la-south-2":DataArtsStudioRegion.LA_SOUTH_2,
        "la-north-2":DataArtsStudioRegion.LA_NORTH_2,
        "na-mexico-1":DataArtsStudioRegion.NA_MEXICO_1,
        "cn-north-9":DataArtsStudioRegion.CN_NORTH_9,
        "cn-southwest-2":DataArtsStudioRegion.CN_SOUTHWEST_2,
        "ap-southeast-4":DataArtsStudioRegion.AP_SOUTHEAST_4,
        "tr-west-1":DataArtsStudioRegion.TR_WEST_1,
        "me-east-1":DataArtsStudioRegion.ME_EAST_1,
        "eu-west-101":DataArtsStudioRegion.EU_WEST_101,
        "ae-ad-1":DataArtsStudioRegion.AE_AD_1,
        "cn-north-11":DataArtsStudioRegion.CN_NORTH_11
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
