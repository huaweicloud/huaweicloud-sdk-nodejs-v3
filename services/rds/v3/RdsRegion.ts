import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class RdsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://rds.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://rds.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://rds.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://rds.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://rds.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://rds.cn-east-5.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://rds.cn-east-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://rds.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://rds.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://rds.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://rds.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://rds.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://rds.ru-northwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://rds.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://rds.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://rds.cn-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://rds.na-mexico-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://rds.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://rds.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://rds.cn-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://rds.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://rds.ap-southeast-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://rds.ap-southeast-5.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://rds.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://rds.eu-west-101.myhuaweicloud.eu"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://rds.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://rds.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://rds.ru-moscow-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://rds.me-east-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://rds.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":RdsRegion.AF_SOUTH_1,
        "cn-north-4":RdsRegion.CN_NORTH_4,
        "cn-north-1":RdsRegion.CN_NORTH_1,
        "cn-east-2":RdsRegion.CN_EAST_2,
        "cn-east-3":RdsRegion.CN_EAST_3,
        "cn-east-5":RdsRegion.CN_EAST_5,
        "cn-east-4":RdsRegion.CN_EAST_4,
        "cn-south-1":RdsRegion.CN_SOUTH_1,
        "cn-southwest-2":RdsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":RdsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":RdsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":RdsRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":RdsRegion.RU_NORTHWEST_2,
        "sa-brazil-1":RdsRegion.SA_BRAZIL_1,
        "la-north-2":RdsRegion.LA_NORTH_2,
        "cn-south-2":RdsRegion.CN_SOUTH_2,
        "na-mexico-1":RdsRegion.NA_MEXICO_1,
        "la-south-2":RdsRegion.LA_SOUTH_2,
        "cn-north-9":RdsRegion.CN_NORTH_9,
        "cn-north-2":RdsRegion.CN_NORTH_2,
        "tr-west-1":RdsRegion.TR_WEST_1,
        "ap-southeast-4":RdsRegion.AP_SOUTHEAST_4,
        "ap-southeast-5":RdsRegion.AP_SOUTHEAST_5,
        "ae-ad-1":RdsRegion.AE_AD_1,
        "eu-west-101":RdsRegion.EU_WEST_101,
        "eu-west-0":RdsRegion.EU_WEST_0,
        "my-kualalumpur-1":RdsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":RdsRegion.RU_MOSCOW_1,
        "me-east-1":RdsRegion.ME_EAST_1,
        "af-north-1":RdsRegion.AF_NORTH_1
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
