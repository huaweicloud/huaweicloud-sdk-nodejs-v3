import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DscRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sdg.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://sdg.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://sdg.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://sdg.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://sdg.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://sdg.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://sdg.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://sdg.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://sdg.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sdg.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://sdg.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://sdg.la-south-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://sdg.af-south-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://sdg.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://sdg.tr-west-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://sdg.eu-west-101.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":DscRegion.CN_NORTH_4,
        "cn-north-1":DscRegion.CN_NORTH_1,
        "cn-north-9":DscRegion.CN_NORTH_9,
        "cn-east-2":DscRegion.CN_EAST_2,
        "cn-east-3":DscRegion.CN_EAST_3,
        "cn-south-1":DscRegion.CN_SOUTH_1,
        "cn-southwest-2":DscRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":DscRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":DscRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":DscRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":DscRegion.SA_BRAZIL_1,
        "la-south-2":DscRegion.LA_SOUTH_2,
        "af-south-1":DscRegion.AF_SOUTH_1,
        "la-north-2":DscRegion.LA_NORTH_2,
        "tr-west-1":DscRegion.TR_WEST_1,
        "eu-west-101":DscRegion.EU_WEST_101
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
