import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CseRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cse.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cse.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cse.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cse.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cse.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cse.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cse.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cse.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cse.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cse.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://cse.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cse.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cse.cn-north-9.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cse.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cse.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cse.la-north-2.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cse.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cse.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cse.ap-southeast-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://cse.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":CseRegion.AF_SOUTH_1,
        "cn-north-4":CseRegion.CN_NORTH_4,
        "cn-north-1":CseRegion.CN_NORTH_1,
        "cn-east-2":CseRegion.CN_EAST_2,
        "cn-east-3":CseRegion.CN_EAST_3,
        "cn-south-1":CseRegion.CN_SOUTH_1,
        "cn-southwest-2":CseRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":CseRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":CseRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":CseRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":CseRegion.RU_NORTHWEST_2,
        "cn-south-2":CseRegion.CN_SOUTH_2,
        "cn-north-9":CseRegion.CN_NORTH_9,
        "sa-brazil-1":CseRegion.SA_BRAZIL_1,
        "la-south-2":CseRegion.LA_SOUTH_2,
        "la-north-2":CseRegion.LA_NORTH_2,
        "me-east-1":CseRegion.ME_EAST_1,
        "tr-west-1":CseRegion.TR_WEST_1,
        "ap-southeast-4":CseRegion.AP_SOUTHEAST_4,
        "ru-moscow-1":CseRegion.RU_MOSCOW_1
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
