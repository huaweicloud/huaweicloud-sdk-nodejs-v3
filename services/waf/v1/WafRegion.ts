import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class WafRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://waf.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://waf.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://waf.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://waf.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://waf.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://waf.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://waf.cn-south-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://waf.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://waf.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://waf.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://waf.af-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://waf.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://waf.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://waf.cn-north-9.myhuaweicloud.cn"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://waf.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://waf.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://waf.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://waf.na-mexico-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://waf.ae-ad-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://waf.my-kualalumpur-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://waf.eu-west-0.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://waf.cn-east-5.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://waf.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://waf.me-east-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://waf.eu-west-101.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://waf.ru-moscow-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://waf.ap-southeast-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":WafRegion.CN_NORTH_1,
        "cn-north-2":WafRegion.CN_NORTH_2,
        "cn-north-4":WafRegion.CN_NORTH_4,
        "cn-east-3":WafRegion.CN_EAST_3,
        "cn-east-2":WafRegion.CN_EAST_2,
        "cn-south-1":WafRegion.CN_SOUTH_1,
        "cn-south-2":WafRegion.CN_SOUTH_2,
        "ap-southeast-1":WafRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":WafRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":WafRegion.AP_SOUTHEAST_3,
        "af-south-1":WafRegion.AF_SOUTH_1,
        "ru-northwest-2":WafRegion.RU_NORTHWEST_2,
        "cn-southwest-2":WafRegion.CN_SOUTHWEST_2,
        "cn-north-9":WafRegion.CN_NORTH_9,
        "la-south-2":WafRegion.LA_SOUTH_2,
        "sa-brazil-1":WafRegion.SA_BRAZIL_1,
        "la-north-2":WafRegion.LA_NORTH_2,
        "na-mexico-1":WafRegion.NA_MEXICO_1,
        "ae-ad-1":WafRegion.AE_AD_1,
        "my-kualalumpur-1":WafRegion.MY_KUALALUMPUR_1,
        "eu-west-0":WafRegion.EU_WEST_0,
        "cn-east-5":WafRegion.CN_EAST_5,
        "tr-west-1":WafRegion.TR_WEST_1,
        "me-east-1":WafRegion.ME_EAST_1,
        "eu-west-101":WafRegion.EU_WEST_101,
        "ru-moscow-1":WafRegion.RU_MOSCOW_1,
        "ap-southeast-4":WafRegion.AP_SOUTHEAST_4
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
