import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class GesRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://ges.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://ges.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ges.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ges.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ges.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ges.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ges.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ges.ap-southeast-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":GesRegion.EU_WEST_101,
        "cn-north-2":GesRegion.CN_NORTH_2,
        "cn-north-4":GesRegion.CN_NORTH_4,
        "cn-north-1":GesRegion.CN_NORTH_1,
        "cn-east-3":GesRegion.CN_EAST_3,
        "cn-south-1":GesRegion.CN_SOUTH_1,
        "ap-southeast-1":GesRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":GesRegion.AP_SOUTHEAST_3
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
