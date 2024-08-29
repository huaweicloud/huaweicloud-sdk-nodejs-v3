import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DdsRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dds.eu-west-101.myhuaweicloud.eu"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dds.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dds.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dds.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dds.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dds.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dds.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dds.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dds.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dds.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dds.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://dds.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dds.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dds.cn-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dds.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dds.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dds.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dds.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dds.cn-north-9.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dds.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dds.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dds.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://dds.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://dds.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://dds.ru-moscow-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dds.ae-ad-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":DdsRegion.EU_WEST_101,
        "af-south-1":DdsRegion.AF_SOUTH_1,
        "cn-north-4":DdsRegion.CN_NORTH_4,
        "cn-north-1":DdsRegion.CN_NORTH_1,
        "cn-east-2":DdsRegion.CN_EAST_2,
        "cn-east-3":DdsRegion.CN_EAST_3,
        "cn-south-1":DdsRegion.CN_SOUTH_1,
        "cn-southwest-2":DdsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":DdsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":DdsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":DdsRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":DdsRegion.RU_NORTHWEST_2,
        "cn-south-2":DdsRegion.CN_SOUTH_2,
        "cn-north-2":DdsRegion.CN_NORTH_2,
        "na-mexico-1":DdsRegion.NA_MEXICO_1,
        "la-north-2":DdsRegion.LA_NORTH_2,
        "sa-brazil-1":DdsRegion.SA_BRAZIL_1,
        "la-south-2":DdsRegion.LA_SOUTH_2,
        "cn-north-9":DdsRegion.CN_NORTH_9,
        "me-east-1":DdsRegion.ME_EAST_1,
        "tr-west-1":DdsRegion.TR_WEST_1,
        "ap-southeast-4":DdsRegion.AP_SOUTHEAST_4,
        "eu-west-0":DdsRegion.EU_WEST_0,
        "my-kualalumpur-1":DdsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":DdsRegion.RU_MOSCOW_1,
        "ae-ad-1":DdsRegion.AE_AD_1
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
