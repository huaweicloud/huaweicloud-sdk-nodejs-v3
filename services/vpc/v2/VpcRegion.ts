import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class VpcRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://vpc.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://vpc.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://vpc.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://vpc.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://vpc.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://vpc.cn-east-5.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://vpc.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://vpc.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://vpc.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://vpc.ap-southeast-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://vpc.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://vpc.cn-north-11.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://vpc.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://vpc.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://vpc.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://vpc.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://vpc.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://vpc.cn-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://vpc.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://vpc.na-mexico-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://vpc.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://vpc.tr-west-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://vpc.eu-west-101.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://vpc.me-east-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://vpc.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://vpc.eu-west-0.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://vpc.ru-northwest-2.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://vpc.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://vpc.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://vpc.cn-east-4.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://vpc.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://vpc.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":VpcRegion.AF_SOUTH_1,
        "cn-north-4":VpcRegion.CN_NORTH_4,
        "cn-north-1":VpcRegion.CN_NORTH_1,
        "cn-east-2":VpcRegion.CN_EAST_2,
        "cn-east-3":VpcRegion.CN_EAST_3,
        "cn-east-5":VpcRegion.CN_EAST_5,
        "cn-south-1":VpcRegion.CN_SOUTH_1,
        "cn-south-4":VpcRegion.CN_SOUTH_4,
        "cn-southwest-2":VpcRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":VpcRegion.AP_SOUTHEAST_2,
        "cn-north-9":VpcRegion.CN_NORTH_9,
        "cn-north-11":VpcRegion.CN_NORTH_11,
        "ap-southeast-1":VpcRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":VpcRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":VpcRegion.SA_BRAZIL_1,
        "la-north-2":VpcRegion.LA_NORTH_2,
        "cn-south-2":VpcRegion.CN_SOUTH_2,
        "cn-north-2":VpcRegion.CN_NORTH_2,
        "la-south-2":VpcRegion.LA_SOUTH_2,
        "na-mexico-1":VpcRegion.NA_MEXICO_1,
        "ap-southeast-4":VpcRegion.AP_SOUTHEAST_4,
        "tr-west-1":VpcRegion.TR_WEST_1,
        "eu-west-101":VpcRegion.EU_WEST_101,
        "me-east-1":VpcRegion.ME_EAST_1,
        "ae-ad-1":VpcRegion.AE_AD_1,
        "eu-west-0":VpcRegion.EU_WEST_0,
        "ru-northwest-2":VpcRegion.RU_NORTHWEST_2,
        "my-kualalumpur-1":VpcRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":VpcRegion.RU_MOSCOW_1,
        "cn-east-4":VpcRegion.CN_EAST_4,
        "af-north-1":VpcRegion.AF_NORTH_1,
        "ap-southeast-5":VpcRegion.AP_SOUTHEAST_5
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
