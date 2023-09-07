import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CtsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cts.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cts.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cts.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cts.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cts.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cts.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cts.cn-south-2.myhuaweicloud.cn"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cts.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cts.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cts.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cts.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://cts.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cts.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://cts.cn-south-4.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://cts.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cts.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cts.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cts.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://cts.na-mexico-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://cts.eu-west-101.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":CtsRegion.AF_SOUTH_1,
        "cn-north-4":CtsRegion.CN_NORTH_4,
        "cn-north-1":CtsRegion.CN_NORTH_1,
        "cn-east-2":CtsRegion.CN_EAST_2,
        "cn-east-3":CtsRegion.CN_EAST_3,
        "cn-south-1":CtsRegion.CN_SOUTH_1,
        "cn-south-2":CtsRegion.CN_SOUTH_2,
        "cn-southwest-2":CtsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":CtsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":CtsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":CtsRegion.AP_SOUTHEAST_3,
        "cn-north-2":CtsRegion.CN_NORTH_2,
        "cn-north-9":CtsRegion.CN_NORTH_9,
        "cn-south-4":CtsRegion.CN_SOUTH_4,
        "ru-northwest-2":CtsRegion.RU_NORTHWEST_2,
        "la-south-2":CtsRegion.LA_SOUTH_2,
        "sa-brazil-1":CtsRegion.SA_BRAZIL_1,
        "la-north-2":CtsRegion.LA_NORTH_2,
        "na-mexico-1":CtsRegion.NA_MEXICO_1,
        "eu-west-101":CtsRegion.EU_WEST_101
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
