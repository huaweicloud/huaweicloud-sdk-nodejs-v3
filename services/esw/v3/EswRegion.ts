import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EswRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://esw.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://esw.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://esw.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://esw.cn-east-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://esw.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://esw.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://esw.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://esw.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://esw.la-south-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://esw.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://esw.me-east-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://esw.af-south-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://esw.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://esw.na-mexico-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-south-1":EswRegion.CN_SOUTH_1,
        "cn-east-3":EswRegion.CN_EAST_3,
        "cn-north-4":EswRegion.CN_NORTH_4,
        "cn-east-4":EswRegion.CN_EAST_4,
        "ap-southeast-1":EswRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":EswRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":EswRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":EswRegion.SA_BRAZIL_1,
        "la-south-2":EswRegion.LA_SOUTH_2,
        "tr-west-1":EswRegion.TR_WEST_1,
        "me-east-1":EswRegion.ME_EAST_1,
        "af-south-1":EswRegion.AF_SOUTH_1,
        "la-north-2":EswRegion.LA_NORTH_2,
        "na-mexico-1":EswRegion.NA_MEXICO_1
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
