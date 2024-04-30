import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DrsRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://drs.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://drs.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://drs.cn-north-1.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://drs.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://drs.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://drs.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://drs.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://drs.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://drs.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://drs.ap-southeast-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://drs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://drs.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://drs.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://drs.na-mexico-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://drs.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://drs.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://drs.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://drs.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://drs.cn-south-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://drs.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://drs.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://drs.eu-west-0.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://drs.ru-moscow-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://drs.ae-ad-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://drs.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":DrsRegion.EU_WEST_101,
        "cn-north-4":DrsRegion.CN_NORTH_4,
        "cn-north-1":DrsRegion.CN_NORTH_1,
        "cn-south-1":DrsRegion.CN_SOUTH_1,
        "cn-east-3":DrsRegion.CN_EAST_3,
        "cn-east-2":DrsRegion.CN_EAST_2,
        "cn-north-2":DrsRegion.CN_NORTH_2,
        "ap-southeast-3":DrsRegion.AP_SOUTHEAST_3,
        "ap-southeast-1":DrsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DrsRegion.AP_SOUTHEAST_2,
        "sa-brazil-1":DrsRegion.SA_BRAZIL_1,
        "la-south-2":DrsRegion.LA_SOUTH_2,
        "la-north-2":DrsRegion.LA_NORTH_2,
        "na-mexico-1":DrsRegion.NA_MEXICO_1,
        "af-south-1":DrsRegion.AF_SOUTH_1,
        "cn-north-9":DrsRegion.CN_NORTH_9,
        "cn-southwest-2":DrsRegion.CN_SOUTHWEST_2,
        "cn-south-2":DrsRegion.CN_SOUTH_2,
        "cn-south-4":DrsRegion.CN_SOUTH_4,
        "tr-west-1":DrsRegion.TR_WEST_1,
        "ap-southeast-4":DrsRegion.AP_SOUTHEAST_4,
        "eu-west-0":DrsRegion.EU_WEST_0,
        "ru-moscow-1":DrsRegion.RU_MOSCOW_1,
        "ae-ad-1":DrsRegion.AE_AD_1,
        "my-kualalumpur-1":DrsRegion.MY_KUALALUMPUR_1
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
