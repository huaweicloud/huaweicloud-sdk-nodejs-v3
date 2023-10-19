import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CbhRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cbh.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cbh.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cbh.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cbh.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cbh.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cbh.ap-southeast-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CbhRegion.CN_NORTH_4,
        "cn-north-9":CbhRegion.CN_NORTH_9,
        "cn-east-3":CbhRegion.CN_EAST_3,
        "cn-south-1":CbhRegion.CN_SOUTH_1,
        "cn-southwest-2":CbhRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":CbhRegion.AP_SOUTHEAST_3
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
