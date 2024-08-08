import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IoTDMRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://iotda-mgmt.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://iotda-mgmt.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://iotda-mgmt.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://iotda-mgmt.cn-east-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://iotda-mgmt.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://iotda-mgmt.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://iotda-mgmt.ap-southeast-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://iotda-mgmt.af-south-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://iotda-mgmt.me-east-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://iotda-mgmt.la-south-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":IoTDMRegion.CN_NORTH_4,
        "cn-south-4":IoTDMRegion.CN_SOUTH_4,
        "cn-south-1":IoTDMRegion.CN_SOUTH_1,
        "cn-east-3":IoTDMRegion.CN_EAST_3,
        "ap-southeast-3":IoTDMRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":IoTDMRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":IoTDMRegion.AP_SOUTHEAST_1,
        "af-south-1":IoTDMRegion.AF_SOUTH_1,
        "me-east-1":IoTDMRegion.ME_EAST_1,
        "la-south-2":IoTDMRegion.LA_SOUTH_2
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
