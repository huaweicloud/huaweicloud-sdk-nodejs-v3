import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class FunctionGraphRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://functiongraph.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://functiongraph.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://functiongraph.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://functiongraph.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://functiongraph.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://functiongraph.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://functiongraph.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://functiongraph.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://functiongraph.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://functiongraph.cn-southwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://functiongraph.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://functiongraph.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://functiongraph.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://functiongraph.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://functiongraph.ap-southeast-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":FunctionGraphRegion.CN_NORTH_4,
        "cn-north-1":FunctionGraphRegion.CN_NORTH_1,
        "cn-east-2":FunctionGraphRegion.CN_EAST_2,
        "cn-east-3":FunctionGraphRegion.CN_EAST_3,
        "cn-south-1":FunctionGraphRegion.CN_SOUTH_1,
        "ap-southeast-2":FunctionGraphRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":FunctionGraphRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":FunctionGraphRegion.AP_SOUTHEAST_3,
        "af-south-1":FunctionGraphRegion.AF_SOUTH_1,
        "cn-southwest-2":FunctionGraphRegion.CN_SOUTHWEST_2,
        "sa-brazil-1":FunctionGraphRegion.SA_BRAZIL_1,
        "la-south-2":FunctionGraphRegion.LA_SOUTH_2,
        "na-mexico-1":FunctionGraphRegion.NA_MEXICO_1,
        "la-north-2":FunctionGraphRegion.LA_NORTH_2,
        "ap-southeast-4":FunctionGraphRegion.AP_SOUTHEAST_4
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
