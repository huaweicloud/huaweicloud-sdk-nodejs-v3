import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class NatRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://nat.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://nat.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://nat.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://nat.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://nat.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://nat.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://nat.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://nat.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://nat.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://nat.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://nat.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://nat.cn-north-2.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://nat.ru-northwest-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://nat.na-mexico-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://nat.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://nat.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://nat.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://nat.cn-north-9.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":NatRegion.AF_SOUTH_1,
        "cn-north-4":NatRegion.CN_NORTH_4,
        "cn-north-1":NatRegion.CN_NORTH_1,
        "cn-east-2":NatRegion.CN_EAST_2,
        "cn-east-3":NatRegion.CN_EAST_3,
        "cn-south-1":NatRegion.CN_SOUTH_1,
        "cn-southwest-2":NatRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":NatRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":NatRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":NatRegion.AP_SOUTHEAST_3,
        "cn-south-2":NatRegion.CN_SOUTH_2,
        "cn-north-2":NatRegion.CN_NORTH_2,
        "ru-northwest-2":NatRegion.RU_NORTHWEST_2,
        "na-mexico-1":NatRegion.NA_MEXICO_1,
        "sa-brazil-1":NatRegion.SA_BRAZIL_1,
        "la-south-2":NatRegion.LA_SOUTH_2,
        "la-north-2":NatRegion.LA_NORTH_2,
        "cn-north-9":NatRegion.CN_NORTH_9
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