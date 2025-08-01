import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class KpsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://kms.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://kms.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://kms.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://kms.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://kms.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://kms.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://kms.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://kms.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://kms.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://kms.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://kms.ap-southeast-4.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://kms.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://kms.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://kms.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://kms.ap-southeast-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://kms.na-mexico-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://kms.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://kms.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://kms.cn-south-2.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://kms.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://kms.tr-west-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://kms.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://kms.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://kms.cn-east-5.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://kms.cn-east-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://kms.ap-southeast-5.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://kms.cn-north-12.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://kms.cn-north-11.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://kms.af-north-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://kms.cn-southwest-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":KpsRegion.CN_NORTH_4,
        "cn-north-1":KpsRegion.CN_NORTH_1,
        "cn-north-2":KpsRegion.CN_NORTH_2,
        "cn-north-9":KpsRegion.CN_NORTH_9,
        "cn-east-2":KpsRegion.CN_EAST_2,
        "cn-east-3":KpsRegion.CN_EAST_3,
        "cn-south-1":KpsRegion.CN_SOUTH_1,
        "cn-southwest-2":KpsRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":KpsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":KpsRegion.AP_SOUTHEAST_3,
        "ap-southeast-4":KpsRegion.AP_SOUTHEAST_4,
        "la-south-2":KpsRegion.LA_SOUTH_2,
        "sa-brazil-1":KpsRegion.SA_BRAZIL_1,
        "la-north-2":KpsRegion.LA_NORTH_2,
        "ap-southeast-2":KpsRegion.AP_SOUTHEAST_2,
        "na-mexico-1":KpsRegion.NA_MEXICO_1,
        "af-south-1":KpsRegion.AF_SOUTH_1,
        "cn-south-4":KpsRegion.CN_SOUTH_4,
        "cn-south-2":KpsRegion.CN_SOUTH_2,
        "me-east-1":KpsRegion.ME_EAST_1,
        "tr-west-1":KpsRegion.TR_WEST_1,
        "my-kualalumpur-1":KpsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":KpsRegion.RU_MOSCOW_1,
        "cn-east-5":KpsRegion.CN_EAST_5,
        "cn-east-4":KpsRegion.CN_EAST_4,
        "ap-southeast-5":KpsRegion.AP_SOUTHEAST_5,
        "cn-north-12":KpsRegion.CN_NORTH_12,
        "cn-north-11":KpsRegion.CN_NORTH_11,
        "af-north-1":KpsRegion.AF_NORTH_1,
        "cn-southwest-3":KpsRegion.CN_SOUTHWEST_3
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
