import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DcRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dcaas.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dcaas.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dcaas.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dcaas.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dcaas.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dcaas.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dcaas.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dcaas.ap-southeast-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dcaas.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dcaas.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dcaas.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dcaas.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dcaas.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dcaas.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dcaas.cn-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dcaas.na-mexico-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dcaas.la-south-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dcaas.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://dcaas.tr-west-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://dcaas.cn-south-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://dcaas.me-east-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://dcaas.af-north-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://dcaas.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://dcaas.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":DcRegion.AF_SOUTH_1,
        "cn-north-4":DcRegion.CN_NORTH_4,
        "cn-north-1":DcRegion.CN_NORTH_1,
        "cn-east-2":DcRegion.CN_EAST_2,
        "cn-east-3":DcRegion.CN_EAST_3,
        "cn-south-1":DcRegion.CN_SOUTH_1,
        "cn-southwest-2":DcRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":DcRegion.AP_SOUTHEAST_2,
        "cn-north-9":DcRegion.CN_NORTH_9,
        "ap-southeast-1":DcRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":DcRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":DcRegion.SA_BRAZIL_1,
        "la-north-2":DcRegion.LA_NORTH_2,
        "cn-south-2":DcRegion.CN_SOUTH_2,
        "cn-north-2":DcRegion.CN_NORTH_2,
        "na-mexico-1":DcRegion.NA_MEXICO_1,
        "la-south-2":DcRegion.LA_SOUTH_2,
        "ap-southeast-4":DcRegion.AP_SOUTHEAST_4,
        "tr-west-1":DcRegion.TR_WEST_1,
        "cn-south-4":DcRegion.CN_SOUTH_4,
        "me-east-1":DcRegion.ME_EAST_1,
        "af-north-1":DcRegion.AF_NORTH_1,
        "ru-moscow-1":DcRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":DcRegion.MY_KUALALUMPUR_1
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
