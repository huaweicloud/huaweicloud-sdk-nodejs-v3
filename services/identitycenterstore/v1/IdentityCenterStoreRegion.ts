import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IdentityCenterStoreRegion {
    public static CN_EAST_3 = new Region("cn-east-3", ["https://identitystore.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://identitystore.cn-north-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://identitystore.ap-southeast-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://identitystore.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://identitystore.ap-southeast-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://identitystore.la-south-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://identitystore.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://identitystore.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://identitystore.cn-south-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://identitystore.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://identitystore.tr-west-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://identitystore.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://identitystore.sa-brazil-1.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://identitystore.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://identitystore.cn-southwest-2.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://identitystore.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://identitystore.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-3":IdentityCenterStoreRegion.CN_EAST_3,
        "cn-north-4":IdentityCenterStoreRegion.CN_NORTH_4,
        "ap-southeast-4":IdentityCenterStoreRegion.AP_SOUTHEAST_4,
        "ap-southeast-3":IdentityCenterStoreRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":IdentityCenterStoreRegion.AP_SOUTHEAST_2,
        "la-south-2":IdentityCenterStoreRegion.LA_SOUTH_2,
        "af-south-1":IdentityCenterStoreRegion.AF_SOUTH_1,
        "ap-southeast-1":IdentityCenterStoreRegion.AP_SOUTHEAST_1,
        "cn-south-4":IdentityCenterStoreRegion.CN_SOUTH_4,
        "me-east-1":IdentityCenterStoreRegion.ME_EAST_1,
        "tr-west-1":IdentityCenterStoreRegion.TR_WEST_1,
        "la-north-2":IdentityCenterStoreRegion.LA_NORTH_2,
        "sa-brazil-1":IdentityCenterStoreRegion.SA_BRAZIL_1,
        "cn-south-1":IdentityCenterStoreRegion.CN_SOUTH_1,
        "cn-southwest-2":IdentityCenterStoreRegion.CN_SOUTHWEST_2,
        "af-north-1":IdentityCenterStoreRegion.AF_NORTH_1,
        "ap-southeast-5":IdentityCenterStoreRegion.AP_SOUTHEAST_5
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
