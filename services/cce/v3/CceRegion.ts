import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CceRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cce.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://cce.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cce.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cce.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cce.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cce.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://cce.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cce.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cce.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cce.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cce.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cce.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cce.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cce.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cce.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cce.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cce.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://cce.na-mexico-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://cce.ru-northwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cce.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cce.tr-west-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://cce.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://cce.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://cce.cn-north-11.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://cce.my-kualalumpur-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://cce.eu-west-0.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://cce.ru-moscow-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cce.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://cce.cn-east-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":CceRegion.CN_NORTH_1,
        "cn-north-2":CceRegion.CN_NORTH_2,
        "cn-north-4":CceRegion.CN_NORTH_4,
        "cn-north-9":CceRegion.CN_NORTH_9,
        "cn-south-1":CceRegion.CN_SOUTH_1,
        "cn-south-2":CceRegion.CN_SOUTH_2,
        "cn-south-4":CceRegion.CN_SOUTH_4,
        "cn-east-2":CceRegion.CN_EAST_2,
        "cn-east-3":CceRegion.CN_EAST_3,
        "cn-southwest-2":CceRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":CceRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":CceRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":CceRegion.AP_SOUTHEAST_3,
        "af-south-1":CceRegion.AF_SOUTH_1,
        "sa-brazil-1":CceRegion.SA_BRAZIL_1,
        "la-south-2":CceRegion.LA_SOUTH_2,
        "la-north-2":CceRegion.LA_NORTH_2,
        "na-mexico-1":CceRegion.NA_MEXICO_1,
        "ru-northwest-2":CceRegion.RU_NORTHWEST_2,
        "ap-southeast-4":CceRegion.AP_SOUTHEAST_4,
        "tr-west-1":CceRegion.TR_WEST_1,
        "ae-ad-1":CceRegion.AE_AD_1,
        "eu-west-101":CceRegion.EU_WEST_101,
        "cn-north-11":CceRegion.CN_NORTH_11,
        "my-kualalumpur-1":CceRegion.MY_KUALALUMPUR_1,
        "eu-west-0":CceRegion.EU_WEST_0,
        "ru-moscow-1":CceRegion.RU_MOSCOW_1,
        "me-east-1":CceRegion.ME_EAST_1,
        "cn-east-4":CceRegion.CN_EAST_4
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
