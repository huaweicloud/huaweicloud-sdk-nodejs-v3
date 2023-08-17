import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CloudPipelineRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cloudpipeline-ext.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cloudpipeline-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cloudpipeline-ext.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cloudpipeline-ext.cn-south-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cloudpipeline-ext.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cloudpipeline-ext.cn-east-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":CloudPipelineRegion.CN_NORTH_1,
        "cn-north-4":CloudPipelineRegion.CN_NORTH_4,
        "cn-south-1":CloudPipelineRegion.CN_SOUTH_1,
        "cn-south-2":CloudPipelineRegion.CN_SOUTH_2,
        "cn-east-3":CloudPipelineRegion.CN_EAST_3,
        "cn-east-2":CloudPipelineRegion.CN_EAST_2
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
