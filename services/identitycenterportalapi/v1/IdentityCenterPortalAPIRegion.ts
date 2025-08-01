import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IdentityCenterPortalAPIRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://portal-identitycenter.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://portal-identitycenter.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":IdentityCenterPortalAPIRegion.CN_NORTH_4,
        "cn-south-1":IdentityCenterPortalAPIRegion.CN_SOUTH_1
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
