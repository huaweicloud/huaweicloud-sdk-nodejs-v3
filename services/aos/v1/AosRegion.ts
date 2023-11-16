import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AosRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://aos.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://aos.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://aos.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://aos.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://aos.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://aos.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://aos.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://aos.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://aos.ap-southeast-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://aos.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://aos.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":AosRegion.CN_NORTH_4,
        "cn-south-1":AosRegion.CN_SOUTH_1,
        "cn-east-3":AosRegion.CN_EAST_3,
        "cn-north-9":AosRegion.CN_NORTH_9,
        "cn-southwest-2":AosRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":AosRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":AosRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":AosRegion.AP_SOUTHEAST_1,
        "ap-southeast-4":AosRegion.AP_SOUTHEAST_4,
        "me-east-1":AosRegion.ME_EAST_1,
        "tr-west-1":AosRegion.TR_WEST_1
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
