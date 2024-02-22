import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SecMasterRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://secmaster.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://secmaster.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://secmaster.cn-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://secmaster.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://secmaster.cn-north-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://secmaster.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://secmaster.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://secmaster.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://secmaster.cn-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":SecMasterRegion.CN_NORTH_4,
        "cn-east-3":SecMasterRegion.CN_EAST_3,
        "cn-south-1":SecMasterRegion.CN_SOUTH_1,
        "cn-north-9":SecMasterRegion.CN_NORTH_9,
        "cn-north-2":SecMasterRegion.CN_NORTH_2,
        "cn-east-2":SecMasterRegion.CN_EAST_2,
        "cn-southwest-2":SecMasterRegion.CN_SOUTHWEST_2,
        "cn-south-2":SecMasterRegion.CN_SOUTH_2,
        "cn-north-1":SecMasterRegion.CN_NORTH_1
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
