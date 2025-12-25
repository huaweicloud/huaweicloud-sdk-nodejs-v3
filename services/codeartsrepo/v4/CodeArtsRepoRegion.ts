import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CodeArtsRepoRegion {
    public static CN_EAST_2 = new Region("cn-east-2", ["https://codehub-ext.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://codehub-ext.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://codehub-ext.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://codehub-ext.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://codehub-ext.cn-north-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://codehub-ext.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://codehub-ext.cn-southwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://codehub-ext.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://codehub-ext.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://codehub-ext.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://codeartsrepo-ext.la-south-2.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://repo.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://codeartsrepo-ext.tr-west-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://repo.af-south-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://repo.af-north-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://codeartsrepo-ext.eu-west-101.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-2":CodeArtsRepoRegion.CN_EAST_2,
        "cn-south-1":CodeArtsRepoRegion.CN_SOUTH_1,
        "cn-east-3":CodeArtsRepoRegion.CN_EAST_3,
        "cn-north-4":CodeArtsRepoRegion.CN_NORTH_4,
        "cn-north-1":CodeArtsRepoRegion.CN_NORTH_1,
        "cn-south-2":CodeArtsRepoRegion.CN_SOUTH_2,
        "cn-southwest-2":CodeArtsRepoRegion.CN_SOUTHWEST_2,
        "sa-brazil-1":CodeArtsRepoRegion.SA_BRAZIL_1,
        "la-north-2":CodeArtsRepoRegion.LA_NORTH_2,
        "ap-southeast-3":CodeArtsRepoRegion.AP_SOUTHEAST_3,
        "la-south-2":CodeArtsRepoRegion.LA_SOUTH_2,
        "me-east-1":CodeArtsRepoRegion.ME_EAST_1,
        "tr-west-1":CodeArtsRepoRegion.TR_WEST_1,
        "af-south-1":CodeArtsRepoRegion.AF_SOUTH_1,
        "af-north-1":CodeArtsRepoRegion.AF_NORTH_1,
        "eu-west-101":CodeArtsRepoRegion.EU_WEST_101
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
