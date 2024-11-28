import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ErRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://er.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://er.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://er.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://er.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://er.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://er.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://er.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://er.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://er.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://er.ap-southeast-4.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://er.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://er.la-south-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://er.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://er.me-east-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://er.af-south-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://er.la-north-2.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://er.ae-ad-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://er.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://er.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-south-1":ErRegion.CN_SOUTH_1,
        "cn-east-3":ErRegion.CN_EAST_3,
        "cn-north-4":ErRegion.CN_NORTH_4,
        "cn-north-2":ErRegion.CN_NORTH_2,
        "cn-north-9":ErRegion.CN_NORTH_9,
        "ap-southeast-1":ErRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":ErRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":ErRegion.AP_SOUTHEAST_3,
        "cn-southwest-2":ErRegion.CN_SOUTHWEST_2,
        "ap-southeast-4":ErRegion.AP_SOUTHEAST_4,
        "sa-brazil-1":ErRegion.SA_BRAZIL_1,
        "la-south-2":ErRegion.LA_SOUTH_2,
        "tr-west-1":ErRegion.TR_WEST_1,
        "me-east-1":ErRegion.ME_EAST_1,
        "af-south-1":ErRegion.AF_SOUTH_1,
        "la-north-2":ErRegion.LA_NORTH_2,
        "ae-ad-1":ErRegion.AE_AD_1,
        "af-north-1":ErRegion.AF_NORTH_1,
        "ap-southeast-5":ErRegion.AP_SOUTHEAST_5
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
