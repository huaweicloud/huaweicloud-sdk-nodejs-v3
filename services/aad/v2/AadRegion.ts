import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AadRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://aad.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://aad.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":AadRegion.CN_NORTH_4,
        "ap-southeast-1":AadRegion.AP_SOUTHEAST_1
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
