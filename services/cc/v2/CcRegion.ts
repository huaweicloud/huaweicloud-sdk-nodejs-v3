import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CcRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cc.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ccaas.cn-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CcRegion.CN_NORTH_4,
        "cn-north-1":CcRegion.CN_NORTH_1
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
