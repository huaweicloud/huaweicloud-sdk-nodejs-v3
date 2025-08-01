import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CesRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://ces.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ces.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ces.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://ces.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ces.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ces.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://ces.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://ces.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ces.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ces.ap-southeast-3.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://ces.na-mexico-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://ces.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://ces.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://ces.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://ces.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://ces.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://ces.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://ces.tr-west-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://ces.eu-west-101.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://ces.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://ces.cn-east-5.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://ces.eu-west-0.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://ces.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://ces.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://ces.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://ces.cn-east-4.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://ces.af-north-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://ces.my-kualalumpur-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://ces.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":CesRegion.AF_SOUTH_1,
        "cn-north-4":CesRegion.CN_NORTH_4,
        "cn-north-1":CesRegion.CN_NORTH_1,
        "cn-east-2":CesRegion.CN_EAST_2,
        "cn-east-3":CesRegion.CN_EAST_3,
        "cn-south-1":CesRegion.CN_SOUTH_1,
        "cn-southwest-2":CesRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":CesRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":CesRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":CesRegion.AP_SOUTHEAST_3,
        "na-mexico-1":CesRegion.NA_MEXICO_1,
        "sa-brazil-1":CesRegion.SA_BRAZIL_1,
        "la-south-2":CesRegion.LA_SOUTH_2,
        "la-north-2":CesRegion.LA_NORTH_2,
        "cn-north-9":CesRegion.CN_NORTH_9,
        "cn-north-2":CesRegion.CN_NORTH_2,
        "ap-southeast-4":CesRegion.AP_SOUTHEAST_4,
        "tr-west-1":CesRegion.TR_WEST_1,
        "eu-west-101":CesRegion.EU_WEST_101,
        "me-east-1":CesRegion.ME_EAST_1,
        "cn-east-5":CesRegion.CN_EAST_5,
        "eu-west-0":CesRegion.EU_WEST_0,
        "ru-moscow-1":CesRegion.RU_MOSCOW_1,
        "cn-south-2":CesRegion.CN_SOUTH_2,
        "cn-south-4":CesRegion.CN_SOUTH_4,
        "cn-east-4":CesRegion.CN_EAST_4,
        "af-north-1":CesRegion.AF_NORTH_1,
        "my-kualalumpur-1":CesRegion.MY_KUALALUMPUR_1,
        "ap-southeast-5":CesRegion.AP_SOUTHEAST_5
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
