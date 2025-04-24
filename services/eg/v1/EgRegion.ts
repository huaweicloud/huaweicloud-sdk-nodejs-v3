import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EgRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://eg.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://eg.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://eg.cn-east-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":EgRegion.CN_NORTH_4,
        "cn-east-2":EgRegion.CN_EAST_2,
        "cn-east-3":EgRegion.CN_EAST_3
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
