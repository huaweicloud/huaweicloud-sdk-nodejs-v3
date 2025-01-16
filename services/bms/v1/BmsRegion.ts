import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class BmsRegion {
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://bms.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://bms.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://bms.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://bms.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://bms.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://bms.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://bms.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://bms.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://bms.ap-southeast-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://bms.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://bms.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://bms.sa-brazil-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://bms.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://bms.cn-southwest-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://bms.af-south-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://bms.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://bms.cn-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://bms.na-mexico-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://bms.cn-east-5.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://bms.ap-southeast-4.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://bms.cn-north-11.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://bms.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://bms.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://bms.cn-east-4.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://bms.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-2":BmsRegion.CN_NORTH_2,
        "cn-north-4":BmsRegion.CN_NORTH_4,
        "cn-north-1":BmsRegion.CN_NORTH_1,
        "cn-east-2":BmsRegion.CN_EAST_2,
        "cn-east-3":BmsRegion.CN_EAST_3,
        "cn-south-1":BmsRegion.CN_SOUTH_1,
        "ap-southeast-2":BmsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":BmsRegion.AP_SOUTHEAST_3,
        "ap-southeast-1":BmsRegion.AP_SOUTHEAST_1,
        "ru-northwest-2":BmsRegion.RU_NORTHWEST_2,
        "la-south-2":BmsRegion.LA_SOUTH_2,
        "sa-brazil-1":BmsRegion.SA_BRAZIL_1,
        "cn-north-9":BmsRegion.CN_NORTH_9,
        "cn-southwest-2":BmsRegion.CN_SOUTHWEST_2,
        "af-south-1":BmsRegion.AF_SOUTH_1,
        "la-north-2":BmsRegion.LA_NORTH_2,
        "cn-south-2":BmsRegion.CN_SOUTH_2,
        "na-mexico-1":BmsRegion.NA_MEXICO_1,
        "cn-east-5":BmsRegion.CN_EAST_5,
        "ap-southeast-4":BmsRegion.AP_SOUTHEAST_4,
        "cn-north-11":BmsRegion.CN_NORTH_11,
        "tr-west-1":BmsRegion.TR_WEST_1,
        "me-east-1":BmsRegion.ME_EAST_1,
        "cn-east-4":BmsRegion.CN_EAST_4,
        "af-north-1":BmsRegion.AF_NORTH_1
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
