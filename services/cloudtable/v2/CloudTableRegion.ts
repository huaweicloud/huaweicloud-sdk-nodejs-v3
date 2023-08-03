import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CloudTableRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cloudtable.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cloudtable.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cloudtable.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://cloudtable.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cloudtable.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cloudtable.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cloudtable.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cloudtable.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cloudtable.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cloudtable.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cloudtable.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://cloudtable.cn-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":CloudTableRegion.CN_NORTH_1,
        "cn-north-4":CloudTableRegion.CN_NORTH_4,
        "cn-south-1":CloudTableRegion.CN_SOUTH_1,
        "cn-south-4":CloudTableRegion.CN_SOUTH_4,
        "cn-east-2":CloudTableRegion.CN_EAST_2,
        "cn-east-3":CloudTableRegion.CN_EAST_3,
        "cn-southwest-2":CloudTableRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":CloudTableRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":CloudTableRegion.AP_SOUTHEAST_3,
        "cn-south-2":CloudTableRegion.CN_SOUTH_2,
        "cn-north-9":CloudTableRegion.CN_NORTH_9,
        "cn-north-2":CloudTableRegion.CN_NORTH_2
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
