import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DnsRegion {
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dns.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dns.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dns.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dns.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dns.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dns.cn-southwest-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dns.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dns.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dns.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dns.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dns.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dns.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dns.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dns.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dns.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dns.cn-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://dns.cn-south-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://dns.ap-southeast-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://dns.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://dns.eu-west-0.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://dns.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-east-2":DnsRegion.CN_EAST_2,
        "cn-east-3":DnsRegion.CN_EAST_3,
        "cn-north-1":DnsRegion.CN_NORTH_1,
        "cn-north-4":DnsRegion.CN_NORTH_4,
        "cn-south-1":DnsRegion.CN_SOUTH_1,
        "cn-southwest-2":DnsRegion.CN_SOUTHWEST_2,
        "af-south-1":DnsRegion.AF_SOUTH_1,
        "ap-southeast-1":DnsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DnsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":DnsRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":DnsRegion.SA_BRAZIL_1,
        "la-south-2":DnsRegion.LA_SOUTH_2,
        "la-north-2":DnsRegion.LA_NORTH_2,
        "na-mexico-1":DnsRegion.NA_MEXICO_1,
        "cn-north-9":DnsRegion.CN_NORTH_9,
        "cn-north-2":DnsRegion.CN_NORTH_2,
        "cn-south-2":DnsRegion.CN_SOUTH_2,
        "ap-southeast-4":DnsRegion.AP_SOUTHEAST_4,
        "ae-ad-1":DnsRegion.AE_AD_1,
        "eu-west-0":DnsRegion.EU_WEST_0,
        "ru-moscow-1":DnsRegion.RU_MOSCOW_1
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
