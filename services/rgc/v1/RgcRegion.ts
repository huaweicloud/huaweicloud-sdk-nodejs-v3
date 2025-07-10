import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class RgcRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://rgc.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://rgc.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://rgc.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://rgc.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://rgc.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://rgc.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://rgc.ap-southeast-4.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://rgc.af-south-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://rgc.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://rgc.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://rgc.sa-brazil-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":RgcRegion.CN_NORTH_4,
        "cn-east-3":RgcRegion.CN_EAST_3,
        "cn-south-1":RgcRegion.CN_SOUTH_1,
        "ap-southeast-1":RgcRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":RgcRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":RgcRegion.AP_SOUTHEAST_3,
        "ap-southeast-4":RgcRegion.AP_SOUTHEAST_4,
        "af-south-1":RgcRegion.AF_SOUTH_1,
        "la-south-2":RgcRegion.LA_SOUTH_2,
        "la-north-2":RgcRegion.LA_NORTH_2,
        "sa-brazil-1":RgcRegion.SA_BRAZIL_1
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
