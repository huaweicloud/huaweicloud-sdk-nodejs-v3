import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DasRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://das.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://das.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://das.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://das.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://das.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://das.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://das.cn-southwest-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://das.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://das.ap-southeast-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://das.me-east-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://das.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://das.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://das.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://das.cn-east-5.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://das.sa-brazil-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://das.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://das.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://das.ap-southeast-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://das.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-south-1":DasRegion.CN_SOUTH_1,
        "cn-south-2":DasRegion.CN_SOUTH_2,
        "cn-north-1":DasRegion.CN_NORTH_1,
        "cn-north-4":DasRegion.CN_NORTH_4,
        "cn-east-3":DasRegion.CN_EAST_3,
        "cn-east-2":DasRegion.CN_EAST_2,
        "cn-southwest-2":DasRegion.CN_SOUTHWEST_2,
        "tr-west-1":DasRegion.TR_WEST_1,
        "ap-southeast-4":DasRegion.AP_SOUTHEAST_4,
        "me-east-1":DasRegion.ME_EAST_1,
        "na-mexico-1":DasRegion.NA_MEXICO_1,
        "cn-north-9":DasRegion.CN_NORTH_9,
        "cn-south-4":DasRegion.CN_SOUTH_4,
        "cn-east-5":DasRegion.CN_EAST_5,
        "sa-brazil-1":DasRegion.SA_BRAZIL_1,
        "ap-southeast-3":DasRegion.AP_SOUTHEAST_3,
        "af-south-1":DasRegion.AF_SOUTH_1,
        "ap-southeast-1":DasRegion.AP_SOUTHEAST_1,
        "af-north-1":DasRegion.AF_NORTH_1
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
