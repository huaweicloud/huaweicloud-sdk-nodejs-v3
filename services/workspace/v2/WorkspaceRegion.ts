import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class WorkspaceRegion {
    public static CN_EAST_3 = new Region("cn-east-3", ["https://workspace.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://workspace.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://workspace.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://workspace.cn-southwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://workspace.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://workspace.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://workspace.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://workspace.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://workspace.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://workspace.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://workspace.cn-east-5.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://workspace.me-east-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://workspace.af-south-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://workspace.tr-west-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://workspace.cn-north-11.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://workspace.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://workspace.ap-southeast-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-3":WorkspaceRegion.CN_EAST_3,
        "cn-north-4":WorkspaceRegion.CN_NORTH_4,
        "cn-south-1":WorkspaceRegion.CN_SOUTH_1,
        "cn-southwest-2":WorkspaceRegion.CN_SOUTHWEST_2,
        "la-south-2":WorkspaceRegion.LA_SOUTH_2,
        "sa-brazil-1":WorkspaceRegion.SA_BRAZIL_1,
        "la-north-2":WorkspaceRegion.LA_NORTH_2,
        "ap-southeast-3":WorkspaceRegion.AP_SOUTHEAST_3,
        "cn-north-9":WorkspaceRegion.CN_NORTH_9,
        "ap-southeast-1":WorkspaceRegion.AP_SOUTHEAST_1,
        "cn-east-5":WorkspaceRegion.CN_EAST_5,
        "me-east-1":WorkspaceRegion.ME_EAST_1,
        "af-south-1":WorkspaceRegion.AF_SOUTH_1,
        "tr-west-1":WorkspaceRegion.TR_WEST_1,
        "cn-north-11":WorkspaceRegion.CN_NORTH_11,
        "af-north-1":WorkspaceRegion.AF_NORTH_1,
        "ap-southeast-2":WorkspaceRegion.AP_SOUTHEAST_2
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
