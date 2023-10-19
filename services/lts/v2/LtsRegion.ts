import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class LtsRegion {
    public static CN_EAST_2 = new Region("cn-east-2", ["https://lts.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://lts.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://lts.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://lts.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://lts.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://lts.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://lts.cn-southwest-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://lts.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://lts.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://lts.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://lts.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://lts.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://lts.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://lts.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://lts.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://lts.cn-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://lts.na-mexico-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://lts.ap-southeast-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://lts.ae-ad-1.g42cloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-2":LtsRegion.CN_EAST_2,
        "cn-east-3":LtsRegion.CN_EAST_3,
        "cn-north-1":LtsRegion.CN_NORTH_1,
        "cn-north-2":LtsRegion.CN_NORTH_2,
        "cn-north-4":LtsRegion.CN_NORTH_4,
        "cn-south-1":LtsRegion.CN_SOUTH_1,
        "cn-southwest-2":LtsRegion.CN_SOUTHWEST_2,
        "af-south-1":LtsRegion.AF_SOUTH_1,
        "ap-southeast-1":LtsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":LtsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":LtsRegion.AP_SOUTHEAST_3,
        "la-south-2":LtsRegion.LA_SOUTH_2,
        "sa-brazil-1":LtsRegion.SA_BRAZIL_1,
        "la-north-2":LtsRegion.LA_NORTH_2,
        "cn-north-9":LtsRegion.CN_NORTH_9,
        "cn-south-2":LtsRegion.CN_SOUTH_2,
        "na-mexico-1":LtsRegion.NA_MEXICO_1,
        "ap-southeast-4":LtsRegion.AP_SOUTHEAST_4,
        "ae-ad-1":LtsRegion.AE_AD_1
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
