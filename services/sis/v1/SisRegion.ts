import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SisRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sis-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://sis-ext.cn-east-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sis-ext.ap-southeast-3.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://sis-ext.me-east-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":SisRegion.CN_NORTH_4,
        "cn-east-3":SisRegion.CN_EAST_3,
        "ap-southeast-3":SisRegion.AP_SOUTHEAST_3,
        "me-east-1":SisRegion.ME_EAST_1
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
