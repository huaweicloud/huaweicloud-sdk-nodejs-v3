import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class GaRegion {
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ga.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://ga.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-3":GaRegion.CN_EAST_3,
        "cn-southwest-2":GaRegion.CN_SOUTHWEST_2
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
