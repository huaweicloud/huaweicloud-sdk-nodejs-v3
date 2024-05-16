import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CbrRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://cbr.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cbr.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cbr.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cbr.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cbr.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cbr.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cbr.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cbr.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cbr.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cbr.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cbr.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cbr.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cbr.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://cbr.cn-south-4.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://cbr.na-mexico-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cbr.la-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cbr.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cbr.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://cbr.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cbr.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cbr.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cbr.me-east-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://cbr.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://cbr.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://cbr.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://cbr.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":CbrRegion.EU_WEST_101,
        "cn-north-1":CbrRegion.CN_NORTH_1,
        "cn-north-4":CbrRegion.CN_NORTH_4,
        "cn-south-1":CbrRegion.CN_SOUTH_1,
        "cn-east-2":CbrRegion.CN_EAST_2,
        "cn-east-3":CbrRegion.CN_EAST_3,
        "cn-southwest-2":CbrRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":CbrRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":CbrRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":CbrRegion.AP_SOUTHEAST_3,
        "af-south-1":CbrRegion.AF_SOUTH_1,
        "sa-brazil-1":CbrRegion.SA_BRAZIL_1,
        "la-north-2":CbrRegion.LA_NORTH_2,
        "cn-south-4":CbrRegion.CN_SOUTH_4,
        "na-mexico-1":CbrRegion.NA_MEXICO_1,
        "la-south-2":CbrRegion.LA_SOUTH_2,
        "cn-south-2":CbrRegion.CN_SOUTH_2,
        "cn-north-9":CbrRegion.CN_NORTH_9,
        "cn-north-2":CbrRegion.CN_NORTH_2,
        "ap-southeast-4":CbrRegion.AP_SOUTHEAST_4,
        "tr-west-1":CbrRegion.TR_WEST_1,
        "me-east-1":CbrRegion.ME_EAST_1,
        "ae-ad-1":CbrRegion.AE_AD_1,
        "eu-west-0":CbrRegion.EU_WEST_0,
        "my-kualalumpur-1":CbrRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":CbrRegion.RU_MOSCOW_1
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
