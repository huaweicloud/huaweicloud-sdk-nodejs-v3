import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DccRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dcc.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dcc.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dcc.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dcc.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dcc.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dcc.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dcc.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dcc.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dcc.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dcc.ap-southeast-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":DccRegion.CN_NORTH_1,
        "cn-north-2":DccRegion.CN_NORTH_2,
        "cn-north-4":DccRegion.CN_NORTH_4,
        "cn-south-1":DccRegion.CN_SOUTH_1,
        "cn-east-2":DccRegion.CN_EAST_2,
        "cn-east-3":DccRegion.CN_EAST_3,
        "cn-southwest-2":DccRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":DccRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DccRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":DccRegion.AP_SOUTHEAST_3
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
