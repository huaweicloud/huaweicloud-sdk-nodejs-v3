import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CpcsRegion {
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://kms.cn-north-9.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-9":CpcsRegion.CN_NORTH_9
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
