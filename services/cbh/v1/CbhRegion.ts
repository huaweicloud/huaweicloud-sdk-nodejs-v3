import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CbhRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cbh.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cbh.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cbh.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cbh.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cbh.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cbh.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cbh.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cbh.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cbh.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cbh.ap-southeast-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://cbh.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://cbh.my-kualalumpur-1.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cbh.cn-north-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cbh.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cbh.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cbh.cn-east-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cbh.ap-southeast-2.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://cbh.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://cbh.ap-southeast-5.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://cbh.cn-east-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://cbh.cn-east-5.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://cbh.cn-north-11.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cbh.cn-south-2.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cbh.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cbh.tr-west-1.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://cbh.cn-north-12.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://cbh.cn-southwest-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CbhRegion.CN_NORTH_4,
        "cn-north-9":CbhRegion.CN_NORTH_9,
        "cn-east-3":CbhRegion.CN_EAST_3,
        "cn-south-1":CbhRegion.CN_SOUTH_1,
        "cn-southwest-2":CbhRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":CbhRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":CbhRegion.SA_BRAZIL_1,
        "la-south-2":CbhRegion.LA_SOUTH_2,
        "la-north-2":CbhRegion.LA_NORTH_2,
        "ap-southeast-4":CbhRegion.AP_SOUTHEAST_4,
        "ru-moscow-1":CbhRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":CbhRegion.MY_KUALALUMPUR_1,
        "cn-north-1":CbhRegion.CN_NORTH_1,
        "af-south-1":CbhRegion.AF_SOUTH_1,
        "ap-southeast-1":CbhRegion.AP_SOUTHEAST_1,
        "cn-east-2":CbhRegion.CN_EAST_2,
        "ap-southeast-2":CbhRegion.AP_SOUTHEAST_2,
        "af-north-1":CbhRegion.AF_NORTH_1,
        "ap-southeast-5":CbhRegion.AP_SOUTHEAST_5,
        "cn-east-4":CbhRegion.CN_EAST_4,
        "cn-east-5":CbhRegion.CN_EAST_5,
        "cn-north-11":CbhRegion.CN_NORTH_11,
        "cn-south-2":CbhRegion.CN_SOUTH_2,
        "me-east-1":CbhRegion.ME_EAST_1,
        "tr-west-1":CbhRegion.TR_WEST_1,
        "cn-north-12":CbhRegion.CN_NORTH_12,
        "cn-southwest-3":CbhRegion.CN_SOUTHWEST_3
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
