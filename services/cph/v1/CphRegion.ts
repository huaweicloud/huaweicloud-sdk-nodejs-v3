import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CphRegion {
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://cph.ru-northwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cph.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cph.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cph.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cph.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cph.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cph.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cph.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cph.cn-north-9.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cph.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cph.la-north-2.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://cph.af-north-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://cph.cn-east-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "ru-northwest-2":CphRegion.RU_NORTHWEST_2,
        "ap-southeast-3":CphRegion.AP_SOUTHEAST_3,
        "ap-southeast-1":CphRegion.AP_SOUTHEAST_1,
        "cn-north-4":CphRegion.CN_NORTH_4,
        "cn-south-1":CphRegion.CN_SOUTH_1,
        "cn-southwest-2":CphRegion.CN_SOUTHWEST_2,
        "cn-east-3":CphRegion.CN_EAST_3,
        "cn-east-2":CphRegion.CN_EAST_2,
        "cn-north-9":CphRegion.CN_NORTH_9,
        "la-south-2":CphRegion.LA_SOUTH_2,
        "la-north-2":CphRegion.LA_NORTH_2,
        "af-north-1":CphRegion.AF_NORTH_1,
        "cn-east-4":CphRegion.CN_EAST_4
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
