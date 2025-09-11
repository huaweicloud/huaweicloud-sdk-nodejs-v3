import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SmnRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://smn.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://smn.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://smn.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://smn.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://smn.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://smn.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://smn.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://smn.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://smn.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://smn.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://smn.cn-north-2.myhuaweicloud.cn"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://smn.cn-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://smn.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://smn.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://smn.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://smn.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://smn.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://smn.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://smn.tr-west-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://smn.eu-west-101.myhuaweicloud.eu"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://smn.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://smn.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://smn.ru-moscow-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://smn.ae-ad-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://smn.cn-south-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://smn.cn-east-5.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://smn.cn-east-4.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://smn.cn-north-12.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://smn.cn-north-11.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://smn.cn-southwest-3.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":SmnRegion.AF_SOUTH_1,
        "cn-north-4":SmnRegion.CN_NORTH_4,
        "cn-north-1":SmnRegion.CN_NORTH_1,
        "cn-east-2":SmnRegion.CN_EAST_2,
        "cn-east-3":SmnRegion.CN_EAST_3,
        "cn-south-1":SmnRegion.CN_SOUTH_1,
        "cn-southwest-2":SmnRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":SmnRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":SmnRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":SmnRegion.AP_SOUTHEAST_3,
        "cn-north-2":SmnRegion.CN_NORTH_2,
        "cn-south-2":SmnRegion.CN_SOUTH_2,
        "na-mexico-1":SmnRegion.NA_MEXICO_1,
        "la-north-2":SmnRegion.LA_NORTH_2,
        "sa-brazil-1":SmnRegion.SA_BRAZIL_1,
        "la-south-2":SmnRegion.LA_SOUTH_2,
        "cn-north-9":SmnRegion.CN_NORTH_9,
        "ap-southeast-4":SmnRegion.AP_SOUTHEAST_4,
        "tr-west-1":SmnRegion.TR_WEST_1,
        "eu-west-101":SmnRegion.EU_WEST_101,
        "eu-west-0":SmnRegion.EU_WEST_0,
        "my-kualalumpur-1":SmnRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":SmnRegion.RU_MOSCOW_1,
        "ae-ad-1":SmnRegion.AE_AD_1,
        "cn-south-4":SmnRegion.CN_SOUTH_4,
        "cn-east-5":SmnRegion.CN_EAST_5,
        "cn-east-4":SmnRegion.CN_EAST_4,
        "cn-north-12":SmnRegion.CN_NORTH_12,
        "cn-north-11":SmnRegion.CN_NORTH_11,
        "cn-southwest-3":SmnRegion.CN_SOUTHWEST_3
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
