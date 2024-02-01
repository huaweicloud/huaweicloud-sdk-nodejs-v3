import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MetaStudioRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://metastudio.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://metastudio.cn-east-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":MetaStudioRegion.CN_NORTH_4,
        "cn-east-3":MetaStudioRegion.CN_EAST_3
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
