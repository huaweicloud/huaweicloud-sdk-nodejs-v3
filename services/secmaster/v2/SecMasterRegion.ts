import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SecMasterRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sa.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://secmaster.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://secmaster.cn-south-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":SecMasterRegion.CN_NORTH_4,
        "cn-east-3":SecMasterRegion.CN_EAST_3,
        "cn-south-1":SecMasterRegion.CN_SOUTH_1
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
