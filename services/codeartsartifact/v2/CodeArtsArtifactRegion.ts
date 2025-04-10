import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsArtifactRegion {
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cloudartifacts-ext.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cloudartifacts-ext.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cloudartifacts-ext.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cloudartifacts-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://artifact.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cloudartifacts-ext.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://artifact.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cloudartifacts-ext.cn-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cloudartifacts-ext.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cloudartifacts-ext.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cloudartifacts-ext.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cloudartifacts-ext.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://artifact.me-east-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://artifact.af-south-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://artifact.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-3":CodeArtsArtifactRegion.CN_EAST_3,
        "cn-east-2":CodeArtsArtifactRegion.CN_EAST_2,
        "cn-north-1":CodeArtsArtifactRegion.CN_NORTH_1,
        "cn-north-4":CodeArtsArtifactRegion.CN_NORTH_4,
        "cn-south-1":CodeArtsArtifactRegion.CN_SOUTH_1,
        "cn-southwest-2":CodeArtsArtifactRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":CodeArtsArtifactRegion.AP_SOUTHEAST_3,
        "cn-south-2":CodeArtsArtifactRegion.CN_SOUTH_2,
        "sa-brazil-1":CodeArtsArtifactRegion.SA_BRAZIL_1,
        "la-south-2":CodeArtsArtifactRegion.LA_SOUTH_2,
        "la-north-2":CodeArtsArtifactRegion.LA_NORTH_2,
        "tr-west-1":CodeArtsArtifactRegion.TR_WEST_1,
        "me-east-1":CodeArtsArtifactRegion.ME_EAST_1,
        "af-south-1":CodeArtsArtifactRegion.AF_SOUTH_1,
        "af-north-1":CodeArtsArtifactRegion.AF_NORTH_1
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
