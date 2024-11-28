import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SecMasterRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://secmaster.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://secmaster.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://secmaster.cn-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://secmaster.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://secmaster.cn-north-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://secmaster.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://secmaster.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://secmaster.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://secmaster.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://secmaster.cn-east-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://secmaster.me-east-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://secmaster.cn-north-11.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://secmaster.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://secmaster.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://secmaster.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://secmaster.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://secmaster.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://secmaster.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://secmaster.tr-west-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://secmaster.af-north-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://secmaster.af-south-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://secmaster.la-south-2.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://secmaster.eu-west-101.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":SecMasterRegion.CN_NORTH_4,
        "cn-east-3":SecMasterRegion.CN_EAST_3,
        "cn-south-1":SecMasterRegion.CN_SOUTH_1,
        "cn-north-9":SecMasterRegion.CN_NORTH_9,
        "cn-north-2":SecMasterRegion.CN_NORTH_2,
        "cn-east-2":SecMasterRegion.CN_EAST_2,
        "cn-southwest-2":SecMasterRegion.CN_SOUTHWEST_2,
        "cn-south-2":SecMasterRegion.CN_SOUTH_2,
        "cn-north-1":SecMasterRegion.CN_NORTH_1,
        "cn-east-4":SecMasterRegion.CN_EAST_4,
        "me-east-1":SecMasterRegion.ME_EAST_1,
        "cn-north-11":SecMasterRegion.CN_NORTH_11,
        "sa-brazil-1":SecMasterRegion.SA_BRAZIL_1,
        "la-north-2":SecMasterRegion.LA_NORTH_2,
        "ap-southeast-3":SecMasterRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":SecMasterRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":SecMasterRegion.AP_SOUTHEAST_1,
        "ap-southeast-4":SecMasterRegion.AP_SOUTHEAST_4,
        "tr-west-1":SecMasterRegion.TR_WEST_1,
        "af-north-1":SecMasterRegion.AF_NORTH_1,
        "af-south-1":SecMasterRegion.AF_SOUTH_1,
        "la-south-2":SecMasterRegion.LA_SOUTH_2,
        "eu-west-101":SecMasterRegion.EU_WEST_101
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
