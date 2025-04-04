import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CaeRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cae.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cae.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cae.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cae.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cae.af-south-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cae.me-east-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cae.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cae.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CaeRegion.CN_NORTH_4,
        "cn-east-3":CaeRegion.CN_EAST_3,
        "cn-south-1":CaeRegion.CN_SOUTH_1,
        "ap-southeast-3":CaeRegion.AP_SOUTHEAST_3,
        "af-south-1":CaeRegion.AF_SOUTH_1,
        "me-east-1":CaeRegion.ME_EAST_1,
        "la-north-2":CaeRegion.LA_NORTH_2,
        "tr-west-1":CaeRegion.TR_WEST_1
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
