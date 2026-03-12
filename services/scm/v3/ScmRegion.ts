import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ScmRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://scm.cn-north-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://scm.ap-southeast-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://scm.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":ScmRegion.CN_NORTH_4,
        "ap-southeast-1":ScmRegion.AP_SOUTHEAST_1,
        "my-kualalumpur-1":ScmRegion.MY_KUALALUMPUR_1
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
