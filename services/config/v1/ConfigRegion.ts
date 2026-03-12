import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ConfigRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://rms.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://rms.eu-west-101.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":ConfigRegion.CN_NORTH_4,
        "eu-west-101":ConfigRegion.EU_WEST_101
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
