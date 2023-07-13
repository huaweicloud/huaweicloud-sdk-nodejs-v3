import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IoTDARegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://iotda.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://iotda.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://iotda.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://iotda.cn-east-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://iotda.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://iotda.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://iotda.ap-southeast-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://iotda.af-south-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":IoTDARegion.CN_NORTH_4,
        "cn-south-4":IoTDARegion.CN_SOUTH_4,
        "cn-south-1":IoTDARegion.CN_SOUTH_1,
        "cn-east-3":IoTDARegion.CN_EAST_3,
        "ap-southeast-3":IoTDARegion.AP_SOUTHEAST_3,
        "ap-southeast-2":IoTDARegion.AP_SOUTHEAST_2,
        "ap-southeast-1":IoTDARegion.AP_SOUTHEAST_1,
        "af-south-1":IoTDARegion.AF_SOUTH_1
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
