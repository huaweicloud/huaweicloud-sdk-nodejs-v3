import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EvsRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://evs.eu-west-101.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://evs.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://evs.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://evs.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://evs.cn-north-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://evs.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://evs.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://evs.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://evs.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://evs.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://evs.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://evs.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://evs.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://evs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://evs.la-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://evs.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://evs.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://evs.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://evs.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://evs.tr-west-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://evs.ae-ad-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://evs.me-east-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://evs.eu-west-0.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://evs.cn-south-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://evs.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://evs.my-kualalumpur-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://evs.cn-east-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://evs.cn-east-5.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://evs.cn-north-11.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://evs.ru-northwest-2.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://evs.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://evs.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":EvsRegion.EU_WEST_101,
        "af-south-1":EvsRegion.AF_SOUTH_1,
        "cn-north-4":EvsRegion.CN_NORTH_4,
        "cn-north-1":EvsRegion.CN_NORTH_1,
        "cn-north-2":EvsRegion.CN_NORTH_2,
        "cn-east-2":EvsRegion.CN_EAST_2,
        "cn-east-3":EvsRegion.CN_EAST_3,
        "cn-south-1":EvsRegion.CN_SOUTH_1,
        "cn-south-2":EvsRegion.CN_SOUTH_2,
        "cn-southwest-2":EvsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":EvsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":EvsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":EvsRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":EvsRegion.SA_BRAZIL_1,
        "la-north-2":EvsRegion.LA_NORTH_2,
        "la-south-2":EvsRegion.LA_SOUTH_2,
        "na-mexico-1":EvsRegion.NA_MEXICO_1,
        "cn-north-9":EvsRegion.CN_NORTH_9,
        "ap-southeast-4":EvsRegion.AP_SOUTHEAST_4,
        "tr-west-1":EvsRegion.TR_WEST_1,
        "ae-ad-1":EvsRegion.AE_AD_1,
        "me-east-1":EvsRegion.ME_EAST_1,
        "eu-west-0":EvsRegion.EU_WEST_0,
        "cn-south-4":EvsRegion.CN_SOUTH_4,
        "ru-moscow-1":EvsRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":EvsRegion.MY_KUALALUMPUR_1,
        "cn-east-4":EvsRegion.CN_EAST_4,
        "cn-east-5":EvsRegion.CN_EAST_5,
        "cn-north-11":EvsRegion.CN_NORTH_11,
        "ru-northwest-2":EvsRegion.RU_NORTHWEST_2,
        "af-north-1":EvsRegion.AF_NORTH_1,
        "ap-southeast-5":EvsRegion.AP_SOUTHEAST_5
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
