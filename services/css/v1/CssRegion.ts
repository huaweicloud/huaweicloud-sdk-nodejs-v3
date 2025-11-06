import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CssRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://css.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://css.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://css.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://css.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://es.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://css.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://es.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://css.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://css.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://css.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://css.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://css.ap-southeast-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://css.sa-brazil-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://css.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://css.la-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://css.af-south-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://css.la-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://css.cn-south-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://css.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://css.ap-southeast-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://css.ae-ad-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://css.cn-east-5.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://css.my-kualalumpur-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://css.eu-west-101.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://css.af-north-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://css.ru-moscow-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://css.me-east-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://css.ap-southeast-5.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://css.cn-east-4.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://css.cn-north-11.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://css.cn-north-12.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://css.cn-southwest-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-south-1":CssRegion.CN_SOUTH_1,
        "cn-east-3":CssRegion.CN_EAST_3,
        "cn-north-4":CssRegion.CN_NORTH_4,
        "cn-north-2":CssRegion.CN_NORTH_2,
        "cn-north-1":CssRegion.CN_NORTH_1,
        "cn-north-9":CssRegion.CN_NORTH_9,
        "cn-east-2":CssRegion.CN_EAST_2,
        "cn-south-4":CssRegion.CN_SOUTH_4,
        "cn-southwest-2":CssRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":CssRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":CssRegion.AP_SOUTHEAST_3,
        "ap-southeast-1":CssRegion.AP_SOUTHEAST_1,
        "sa-brazil-1":CssRegion.SA_BRAZIL_1,
        "na-mexico-1":CssRegion.NA_MEXICO_1,
        "la-north-2":CssRegion.LA_NORTH_2,
        "af-south-1":CssRegion.AF_SOUTH_1,
        "la-south-2":CssRegion.LA_SOUTH_2,
        "cn-south-2":CssRegion.CN_SOUTH_2,
        "tr-west-1":CssRegion.TR_WEST_1,
        "ap-southeast-4":CssRegion.AP_SOUTHEAST_4,
        "ae-ad-1":CssRegion.AE_AD_1,
        "cn-east-5":CssRegion.CN_EAST_5,
        "my-kualalumpur-1":CssRegion.MY_KUALALUMPUR_1,
        "eu-west-101":CssRegion.EU_WEST_101,
        "af-north-1":CssRegion.AF_NORTH_1,
        "ru-moscow-1":CssRegion.RU_MOSCOW_1,
        "me-east-1":CssRegion.ME_EAST_1,
        "ap-southeast-5":CssRegion.AP_SOUTHEAST_5,
        "cn-east-4":CssRegion.CN_EAST_4,
        "cn-north-11":CssRegion.CN_NORTH_11,
        "cn-north-12":CssRegion.CN_NORTH_12,
        "cn-southwest-3":CssRegion.CN_SOUTHWEST_3
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
