import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ImageRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://image.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://image.cn-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://image.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://image.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://image.cn-east-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":ImageRegion.CN_NORTH_4,
        "cn-north-1":ImageRegion.CN_NORTH_1,
        "ap-southeast-1":ImageRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":ImageRegion.AP_SOUTHEAST_3,
        "cn-east-3":ImageRegion.CN_EAST_3
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
