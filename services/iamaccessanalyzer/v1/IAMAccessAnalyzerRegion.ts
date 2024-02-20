import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IAMAccessAnalyzerRegion {
    public static CN_EAST_3 = new Region("cn-east-3", ["https://access-analyzer.cn-east-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://access-analyzer.ap-southeast-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-3":IAMAccessAnalyzerRegion.CN_EAST_3,
        "ap-southeast-4":IAMAccessAnalyzerRegion.AP_SOUTHEAST_4
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
