import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CocRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://coc.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://coc-intl.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://coc-eu-west-101-open-api.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CocRegion.CN_NORTH_4,
        "ap-southeast-3":CocRegion.AP_SOUTHEAST_3,
        "eu-west-101":CocRegion.EU_WEST_101
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
