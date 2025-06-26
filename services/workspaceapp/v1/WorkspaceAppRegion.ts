import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class WorkspaceAppRegion {
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://appstream.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://appstream.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://appstream.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://appstream.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://appstream.cn-south-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-9":WorkspaceAppRegion.CN_NORTH_9,
        "cn-southwest-2":WorkspaceAppRegion.CN_SOUTHWEST_2,
        "cn-north-4":WorkspaceAppRegion.CN_NORTH_4,
        "cn-east-3":WorkspaceAppRegion.CN_EAST_3,
        "cn-south-1":WorkspaceAppRegion.CN_SOUTH_1
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
