import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DcsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dcs.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dcs.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dcs.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dcs.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dcs.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dcs.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dcs.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dcs.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dcs.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dcs.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dcs.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dcs.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dcs.ru-northwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dcs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dcs.la-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dcs.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dcs.cn-north-9.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dcs.na-mexico-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dcs.ae-ad-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dcs.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dcs.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dcs.eu-west-101.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dcs.me-east-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://dcs.eu-west-0.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://dcs.cn-east-5.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://dcs.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://dcs.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://dcs.cn-east-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://dcs.ap-southeast-5.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://dcs.cn-north-12.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":DcsRegion.AF_SOUTH_1,
        "cn-north-2":DcsRegion.CN_NORTH_2,
        "cn-north-4":DcsRegion.CN_NORTH_4,
        "cn-north-1":DcsRegion.CN_NORTH_1,
        "cn-east-2":DcsRegion.CN_EAST_2,
        "cn-east-3":DcsRegion.CN_EAST_3,
        "cn-south-1":DcsRegion.CN_SOUTH_1,
        "cn-south-2":DcsRegion.CN_SOUTH_2,
        "cn-southwest-2":DcsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":DcsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":DcsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":DcsRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":DcsRegion.RU_NORTHWEST_2,
        "sa-brazil-1":DcsRegion.SA_BRAZIL_1,
        "la-north-2":DcsRegion.LA_NORTH_2,
        "la-south-2":DcsRegion.LA_SOUTH_2,
        "cn-north-9":DcsRegion.CN_NORTH_9,
        "na-mexico-1":DcsRegion.NA_MEXICO_1,
        "ae-ad-1":DcsRegion.AE_AD_1,
        "tr-west-1":DcsRegion.TR_WEST_1,
        "ap-southeast-4":DcsRegion.AP_SOUTHEAST_4,
        "eu-west-101":DcsRegion.EU_WEST_101,
        "me-east-1":DcsRegion.ME_EAST_1,
        "eu-west-0":DcsRegion.EU_WEST_0,
        "cn-east-5":DcsRegion.CN_EAST_5,
        "my-kualalumpur-1":DcsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":DcsRegion.RU_MOSCOW_1,
        "cn-east-4":DcsRegion.CN_EAST_4,
        "ap-southeast-5":DcsRegion.AP_SOUTHEAST_5,
        "cn-north-12":DcsRegion.CN_NORTH_12
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
