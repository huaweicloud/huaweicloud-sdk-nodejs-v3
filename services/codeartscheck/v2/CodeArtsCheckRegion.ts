import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsCheckRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://codearts-check.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://codearts-check.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://codearts-check.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://codearts-check.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://codearts-check.cn-east-3.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://codearts-check.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://codearts-check.sa-brazil-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://codearts-check.ap-southeast-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CodeArtsCheckRegion.CN_NORTH_4,
        "cn-north-1":CodeArtsCheckRegion.CN_NORTH_1,
        "cn-east-2":CodeArtsCheckRegion.CN_EAST_2,
        "cn-south-1":CodeArtsCheckRegion.CN_SOUTH_1,
        "cn-east-3":CodeArtsCheckRegion.CN_EAST_3,
        "la-north-2":CodeArtsCheckRegion.LA_NORTH_2,
        "sa-brazil-1":CodeArtsCheckRegion.SA_BRAZIL_1,
        "ap-southeast-3":CodeArtsCheckRegion.AP_SOUTHEAST_3
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
