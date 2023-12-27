import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class RocketMQRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dms.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dms.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dms.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dms.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dms.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dms.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dms.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dms.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dms.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dms.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dms.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dms.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dms.af-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dms.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dms.cn-north-9.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dms.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dms.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dms.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dms.tr-west-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dms.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://dms.eu-west-0.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dms.me-east-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dms.na-mexico-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":RocketMQRegion.EU_WEST_101,
        "cn-north-1":RocketMQRegion.CN_NORTH_1,
        "cn-north-2":RocketMQRegion.CN_NORTH_2,
        "cn-north-4":RocketMQRegion.CN_NORTH_4,
        "cn-east-3":RocketMQRegion.CN_EAST_3,
        "cn-east-2":RocketMQRegion.CN_EAST_2,
        "cn-south-1":RocketMQRegion.CN_SOUTH_1,
        "cn-south-2":RocketMQRegion.CN_SOUTH_2,
        "cn-southwest-2":RocketMQRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":RocketMQRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":RocketMQRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":RocketMQRegion.AP_SOUTHEAST_3,
        "af-south-1":RocketMQRegion.AF_SOUTH_1,
        "ru-northwest-2":RocketMQRegion.RU_NORTHWEST_2,
        "cn-north-9":RocketMQRegion.CN_NORTH_9,
        "la-south-2":RocketMQRegion.LA_SOUTH_2,
        "la-north-2":RocketMQRegion.LA_NORTH_2,
        "ap-southeast-4":RocketMQRegion.AP_SOUTHEAST_4,
        "tr-west-1":RocketMQRegion.TR_WEST_1,
        "ae-ad-1":RocketMQRegion.AE_AD_1,
        "eu-west-0":RocketMQRegion.EU_WEST_0,
        "me-east-1":RocketMQRegion.ME_EAST_1,
        "na-mexico-1":RocketMQRegion.NA_MEXICO_1
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
