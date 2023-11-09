import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class TicsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://tics.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://tics.cn-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":TicsRegion.CN_NORTH_4,
        "cn-north-2":TicsRegion.CN_NORTH_2
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
