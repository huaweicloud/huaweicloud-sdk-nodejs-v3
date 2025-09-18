import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class LtsRegion {
    public static CN_EAST_2 = new Region("cn-east-2", ["https://lts.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://lts.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://lts.cn-east-5.myhuaweicloud.com"]);
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
    public static AE_AD_1 = new Region("ae-ad-1", ["https://lts.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://lts.eu-west-101.myhuaweicloud.eu"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://lts.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://lts.me-east-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://lts.my-kualalumpur-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://lts.ap-southeast-5.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://lts.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://lts.cn-north-12.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://lts.cn-south-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-2":LtsRegion.CN_EAST_2,
        "cn-east-3":LtsRegion.CN_EAST_3,
        "cn-east-5":LtsRegion.CN_EAST_5,
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
        "ae-ad-1":LtsRegion.AE_AD_1,
        "eu-west-101":LtsRegion.EU_WEST_101,
        "tr-west-1":LtsRegion.TR_WEST_1,
        "me-east-1":LtsRegion.ME_EAST_1,
        "my-kualalumpur-1":LtsRegion.MY_KUALALUMPUR_1,
        "ap-southeast-5":LtsRegion.AP_SOUTHEAST_5,
        "ru-moscow-1":LtsRegion.RU_MOSCOW_1,
        "cn-north-12":LtsRegion.CN_NORTH_12,
        "cn-south-4":LtsRegion.CN_SOUTH_4
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
