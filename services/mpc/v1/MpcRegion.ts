import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MpcRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://mpc.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://mts.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://mpc.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://mpc.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://mpc.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://mpc.ap-southeast-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":MpcRegion.CN_NORTH_4,
        "cn-north-1":MpcRegion.CN_NORTH_1,
        "cn-east-2":MpcRegion.CN_EAST_2,
        "cn-east-3":MpcRegion.CN_EAST_3,
        "cn-south-1":MpcRegion.CN_SOUTH_1,
        "ap-southeast-3":MpcRegion.AP_SOUTHEAST_3
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
