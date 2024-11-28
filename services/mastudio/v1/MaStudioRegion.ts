import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MaStudioRegion {
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://mastudio.cn-southwest-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-southwest-2":MaStudioRegion.CN_SOUTHWEST_2
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
