import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsBuildRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cloudbuild-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cloudbuild-ext.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cloudbuild-ext.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cloudbuild-ext.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cloudbuild-ext.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cloudbuild-ext.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cloudbuild-ext.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cloudbuild-ext.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cloudbuild-ext.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cloudbuild-ext.la-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CodeArtsBuildRegion.CN_NORTH_4,
        "cn-north-1":CodeArtsBuildRegion.CN_NORTH_1,
        "cn-east-2":CodeArtsBuildRegion.CN_EAST_2,
        "cn-south-1":CodeArtsBuildRegion.CN_SOUTH_1,
        "cn-east-3":CodeArtsBuildRegion.CN_EAST_3,
        "cn-south-2":CodeArtsBuildRegion.CN_SOUTH_2,
        "cn-southwest-2":CodeArtsBuildRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":CodeArtsBuildRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":CodeArtsBuildRegion.SA_BRAZIL_1,
        "la-north-2":CodeArtsBuildRegion.LA_NORTH_2
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
