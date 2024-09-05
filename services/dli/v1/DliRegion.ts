import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DliRegion {
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://dli.my-kualalumpur-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dli.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dli.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dli.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dli.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dli.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dli.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dli.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dli.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dli.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dli.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dli.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dli.cn-southwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dli.sa-brazil-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dli.af-south-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dli.na-mexico-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dli.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dli.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dli.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dli.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dli.eu-west-101.myhuaweicloud.eu"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dli.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://dli.eu-west-0.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dli.me-east-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://dli.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://dli.cn-east-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "my-kualalumpur-1":DliRegion.MY_KUALALUMPUR_1,
        "cn-north-2":DliRegion.CN_NORTH_2,
        "cn-north-4":DliRegion.CN_NORTH_4,
        "cn-north-1":DliRegion.CN_NORTH_1,
        "cn-east-2":DliRegion.CN_EAST_2,
        "cn-east-3":DliRegion.CN_EAST_3,
        "cn-south-1":DliRegion.CN_SOUTH_1,
        "ap-southeast-2":DliRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":DliRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":DliRegion.AP_SOUTHEAST_3,
        "la-south-2":DliRegion.LA_SOUTH_2,
        "cn-north-9":DliRegion.CN_NORTH_9,
        "cn-southwest-2":DliRegion.CN_SOUTHWEST_2,
        "sa-brazil-1":DliRegion.SA_BRAZIL_1,
        "af-south-1":DliRegion.AF_SOUTH_1,
        "na-mexico-1":DliRegion.NA_MEXICO_1,
        "ru-northwest-2":DliRegion.RU_NORTHWEST_2,
        "la-north-2":DliRegion.LA_NORTH_2,
        "tr-west-1":DliRegion.TR_WEST_1,
        "ap-southeast-4":DliRegion.AP_SOUTHEAST_4,
        "eu-west-101":DliRegion.EU_WEST_101,
        "ae-ad-1":DliRegion.AE_AD_1,
        "eu-west-0":DliRegion.EU_WEST_0,
        "me-east-1":DliRegion.ME_EAST_1,
        "ru-moscow-1":DliRegion.RU_MOSCOW_1,
        "cn-east-5":DliRegion.CN_EAST_5
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
