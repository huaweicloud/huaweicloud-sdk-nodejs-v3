import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ApigRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://apig.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://apig.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://apig.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://apig.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://apig.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://apig.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://apig.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://apig.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://apig.ru-northwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://apig.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://apig.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://apig.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://apig.na-mexico-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://apig.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://apig.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://apig.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://apig.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://apig.tr-west-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://apig.cn-north-2.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://apig.eu-west-101.myhuaweicloud.eu"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://apig.ae-ad-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://apig.me-east-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://apig.my-kualalumpur-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://apig.eu-west-0.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://apig.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://apig.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://apig.cn-east-5.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://apig.cn-north-12.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://apig.cn-east-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://apig.cn-southwest-3.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://apig.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://apig.cn-north-11.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://apig.ap-southeast-5.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://apig.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":ApigRegion.CN_NORTH_4,
        "cn-north-1":ApigRegion.CN_NORTH_1,
        "cn-east-2":ApigRegion.CN_EAST_2,
        "cn-east-3":ApigRegion.CN_EAST_3,
        "cn-south-1":ApigRegion.CN_SOUTH_1,
        "ap-southeast-2":ApigRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":ApigRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":ApigRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":ApigRegion.RU_NORTHWEST_2,
        "sa-brazil-1":ApigRegion.SA_BRAZIL_1,
        "la-south-2":ApigRegion.LA_SOUTH_2,
        "la-north-2":ApigRegion.LA_NORTH_2,
        "na-mexico-1":ApigRegion.NA_MEXICO_1,
        "af-south-1":ApigRegion.AF_SOUTH_1,
        "cn-north-9":ApigRegion.CN_NORTH_9,
        "cn-southwest-2":ApigRegion.CN_SOUTHWEST_2,
        "ap-southeast-4":ApigRegion.AP_SOUTHEAST_4,
        "tr-west-1":ApigRegion.TR_WEST_1,
        "cn-north-2":ApigRegion.CN_NORTH_2,
        "eu-west-101":ApigRegion.EU_WEST_101,
        "ae-ad-1":ApigRegion.AE_AD_1,
        "me-east-1":ApigRegion.ME_EAST_1,
        "my-kualalumpur-1":ApigRegion.MY_KUALALUMPUR_1,
        "eu-west-0":ApigRegion.EU_WEST_0,
        "ru-moscow-1":ApigRegion.RU_MOSCOW_1,
        "cn-south-4":ApigRegion.CN_SOUTH_4,
        "cn-east-5":ApigRegion.CN_EAST_5,
        "cn-north-12":ApigRegion.CN_NORTH_12,
        "cn-east-4":ApigRegion.CN_EAST_4,
        "cn-southwest-3":ApigRegion.CN_SOUTHWEST_3,
        "cn-south-2":ApigRegion.CN_SOUTH_2,
        "cn-north-11":ApigRegion.CN_NORTH_11,
        "ap-southeast-5":ApigRegion.AP_SOUTHEAST_5,
        "af-north-1":ApigRegion.AF_NORTH_1
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
