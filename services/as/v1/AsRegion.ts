import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://as.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://as.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://as.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://as.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://as.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://as.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://as.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://as.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://as.ap-southeast-1.myhwclouds.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://as.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://as.cn-north-2.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://as.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://as.cn-north-9.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://as.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://as.la-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://as.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://as.sa-brazil-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://as.cn-south-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://as.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://as.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://as.eu-west-0.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://as.eu-west-101.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://as.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://as.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":AsRegion.AF_SOUTH_1,
        "cn-north-4":AsRegion.CN_NORTH_4,
        "cn-north-1":AsRegion.CN_NORTH_1,
        "cn-east-2":AsRegion.CN_EAST_2,
        "cn-east-3":AsRegion.CN_EAST_3,
        "cn-south-1":AsRegion.CN_SOUTH_1,
        "cn-southwest-2":AsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":AsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":AsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":AsRegion.AP_SOUTHEAST_3,
        "cn-north-2":AsRegion.CN_NORTH_2,
        "ru-northwest-2":AsRegion.RU_NORTHWEST_2,
        "cn-north-9":AsRegion.CN_NORTH_9,
        "na-mexico-1":AsRegion.NA_MEXICO_1,
        "la-north-2":AsRegion.LA_NORTH_2,
        "la-south-2":AsRegion.LA_SOUTH_2,
        "sa-brazil-1":AsRegion.SA_BRAZIL_1,
        "cn-south-2":AsRegion.CN_SOUTH_2,
        "tr-west-1":AsRegion.TR_WEST_1,
        "ap-southeast-4":AsRegion.AP_SOUTHEAST_4,
        "eu-west-0":AsRegion.EU_WEST_0,
        "eu-west-101":AsRegion.EU_WEST_101,
        "my-kualalumpur-1":AsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":AsRegion.RU_MOSCOW_1
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
