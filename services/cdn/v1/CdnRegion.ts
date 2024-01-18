import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CdnRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cdn.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cdn.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://cdn.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":CdnRegion.CN_NORTH_1,
        "ap-southeast-1":CdnRegion.AP_SOUTHEAST_1,
        "eu-west-101":CdnRegion.EU_WEST_101
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
