import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class HssRegion {
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://hss.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://hss.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://hss.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://hss.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://hss.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://hss.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://hss.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://hss.cn-south-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://hss.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://hss.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://hss.ap-southeast-3.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://hss.na-mexico-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://hss.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://hss.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://hss.la-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://hss.cn-south-4.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://hss.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://hss.tr-west-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://hss.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://hss.ap-southeast-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://hss.ae-ad-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://hss.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://hss.cn-east-5.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://hss.my-kualalumpur-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://hss.eu-west-101.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-9":HssRegion.CN_NORTH_9,
        "cn-north-1":HssRegion.CN_NORTH_1,
        "cn-north-4":HssRegion.CN_NORTH_4,
        "cn-southwest-2":HssRegion.CN_SOUTHWEST_2,
        "cn-east-2":HssRegion.CN_EAST_2,
        "cn-east-3":HssRegion.CN_EAST_3,
        "cn-south-1":HssRegion.CN_SOUTH_1,
        "cn-south-2":HssRegion.CN_SOUTH_2,
        "ap-southeast-1":HssRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":HssRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":HssRegion.AP_SOUTHEAST_3,
        "na-mexico-1":HssRegion.NA_MEXICO_1,
        "af-south-1":HssRegion.AF_SOUTH_1,
        "sa-brazil-1":HssRegion.SA_BRAZIL_1,
        "la-south-2":HssRegion.LA_SOUTH_2,
        "cn-south-4":HssRegion.CN_SOUTH_4,
        "la-north-2":HssRegion.LA_NORTH_2,
        "tr-west-1":HssRegion.TR_WEST_1,
        "cn-north-2":HssRegion.CN_NORTH_2,
        "ap-southeast-4":HssRegion.AP_SOUTHEAST_4,
        "ae-ad-1":HssRegion.AE_AD_1,
        "me-east-1":HssRegion.ME_EAST_1,
        "cn-east-5":HssRegion.CN_EAST_5,
        "my-kualalumpur-1":HssRegion.MY_KUALALUMPUR_1,
        "eu-west-101":HssRegion.EU_WEST_101
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
