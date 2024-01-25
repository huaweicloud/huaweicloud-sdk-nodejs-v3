import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsPipelineRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cloudpipeline-ext.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cloudpipeline-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cloudpipeline-ext.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cloudpipeline-ext.cn-south-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cloudpipeline-ext.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cloudpipeline-ext.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cloudpipeline-ext.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cloudpipeline-ext.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cloudpipeline-ext.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cloudpipeline-ext.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://pipeline-external.tr-west-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://pipeline-external.la-south-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":CodeArtsPipelineRegion.CN_NORTH_1,
        "cn-north-4":CodeArtsPipelineRegion.CN_NORTH_4,
        "cn-south-1":CodeArtsPipelineRegion.CN_SOUTH_1,
        "cn-south-2":CodeArtsPipelineRegion.CN_SOUTH_2,
        "cn-east-3":CodeArtsPipelineRegion.CN_EAST_3,
        "cn-east-2":CodeArtsPipelineRegion.CN_EAST_2,
        "cn-southwest-2":CodeArtsPipelineRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":CodeArtsPipelineRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":CodeArtsPipelineRegion.SA_BRAZIL_1,
        "la-north-2":CodeArtsPipelineRegion.LA_NORTH_2,
        "tr-west-1":CodeArtsPipelineRegion.TR_WEST_1,
        "la-south-2":CodeArtsPipelineRegion.LA_SOUTH_2
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
