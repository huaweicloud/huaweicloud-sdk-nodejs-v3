import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DbssRegion {
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dbss.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dbss.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dbss.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dbss.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dbss.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dbss.cn-east-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dbss.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dbss.ap-southeast-2.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dbss.ru-northwest-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dbss.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dbss.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dbss.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dbss.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dbss.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dbss.cn-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dbss.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dbss.cn-north-9.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-south-2":DbssRegion.CN_SOUTH_2,
        "cn-southwest-2":DbssRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":DbssRegion.AP_SOUTHEAST_1,
        "cn-east-3":DbssRegion.CN_EAST_3,
        "cn-south-1":DbssRegion.CN_SOUTH_1,
        "cn-east-2":DbssRegion.CN_EAST_2,
        "ap-southeast-3":DbssRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":DbssRegion.AP_SOUTHEAST_2,
        "ru-northwest-2":DbssRegion.RU_NORTHWEST_2,
        "af-south-1":DbssRegion.AF_SOUTH_1,
        "sa-brazil-1":DbssRegion.SA_BRAZIL_1,
        "la-north-2":DbssRegion.LA_NORTH_2,
        "cn-north-1":DbssRegion.CN_NORTH_1,
        "cn-north-4":DbssRegion.CN_NORTH_4,
        "cn-north-2":DbssRegion.CN_NORTH_2,
        "la-south-2":DbssRegion.LA_SOUTH_2,
        "cn-north-9":DbssRegion.CN_NORTH_9
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
