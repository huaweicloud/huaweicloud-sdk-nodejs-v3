import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AomRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://aom.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://aom.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://aom.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://aom.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://aom.cn-north-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://aom.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://aom.ap-southeast-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://aom.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://aom.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://aom.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://aom.ap-southeast-4.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://aom.cn-north-2.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://aom.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://aom.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://aom.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://aom.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://aom.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://aom.cn-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://aom.na-mexico-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://aom.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://aom.me-east-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":AomRegion.CN_NORTH_4,
        "cn-east-3":AomRegion.CN_EAST_3,
        "cn-south-1":AomRegion.CN_SOUTH_1,
        "cn-east-2":AomRegion.CN_EAST_2,
        "cn-north-1":AomRegion.CN_NORTH_1,
        "cn-southwest-2":AomRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":AomRegion.AP_SOUTHEAST_1,
        "af-south-1":AomRegion.AF_SOUTH_1,
        "ap-southeast-2":AomRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":AomRegion.AP_SOUTHEAST_3,
        "ap-southeast-4":AomRegion.AP_SOUTHEAST_4,
        "cn-north-2":AomRegion.CN_NORTH_2,
        "ru-northwest-2":AomRegion.RU_NORTHWEST_2,
        "la-south-2":AomRegion.LA_SOUTH_2,
        "sa-brazil-1":AomRegion.SA_BRAZIL_1,
        "la-north-2":AomRegion.LA_NORTH_2,
        "cn-north-9":AomRegion.CN_NORTH_9,
        "cn-south-2":AomRegion.CN_SOUTH_2,
        "na-mexico-1":AomRegion.NA_MEXICO_1,
        "tr-west-1":AomRegion.TR_WEST_1,
        "me-east-1":AomRegion.ME_EAST_1
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
