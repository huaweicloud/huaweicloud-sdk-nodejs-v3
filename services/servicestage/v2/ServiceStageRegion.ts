import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ServiceStageRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://servicestage.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://servicestage.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://servicestage.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://servicestage.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://servicestage.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://servicestage.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://servicestage.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://servicestage.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://servicestage.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://servicestage.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://servicestage.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://servicestage.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://servicestage.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://servicestage.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://servicestage.ap-southeast-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://servicestage.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":ServiceStageRegion.AF_SOUTH_1,
        "cn-north-4":ServiceStageRegion.CN_NORTH_4,
        "cn-north-1":ServiceStageRegion.CN_NORTH_1,
        "cn-east-2":ServiceStageRegion.CN_EAST_2,
        "cn-east-3":ServiceStageRegion.CN_EAST_3,
        "cn-south-1":ServiceStageRegion.CN_SOUTH_1,
        "cn-southwest-2":ServiceStageRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":ServiceStageRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":ServiceStageRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":ServiceStageRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":ServiceStageRegion.SA_BRAZIL_1,
        "la-south-2":ServiceStageRegion.LA_SOUTH_2,
        "la-north-2":ServiceStageRegion.LA_NORTH_2,
        "tr-west-1":ServiceStageRegion.TR_WEST_1,
        "ap-southeast-4":ServiceStageRegion.AP_SOUTHEAST_4,
        "ru-moscow-1":ServiceStageRegion.RU_MOSCOW_1
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
