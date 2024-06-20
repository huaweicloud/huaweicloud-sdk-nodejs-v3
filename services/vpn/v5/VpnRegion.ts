import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class VpnRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://vpn.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://vpn.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://vpn.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://vpn.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://vpn.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://vpn.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://vpn.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://vpn.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://vpn.ap-southeast-4.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://vpn.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://vpn.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://vpn.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://vpn.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://vpn.cn-southwest-2.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://vpn.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://vpn.eu-west-101.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://vpn.tr-west-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://vpn.na-mexico-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://vpn.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://vpn.cn-east-5.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://vpn.af-south-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://vpn.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":VpnRegion.CN_NORTH_4,
        "cn-north-1":VpnRegion.CN_NORTH_1,
        "cn-east-2":VpnRegion.CN_EAST_2,
        "cn-east-3":VpnRegion.CN_EAST_3,
        "cn-south-1":VpnRegion.CN_SOUTH_1,
        "ap-southeast-2":VpnRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":VpnRegion.AP_SOUTHEAST_3,
        "ap-southeast-1":VpnRegion.AP_SOUTHEAST_1,
        "ap-southeast-4":VpnRegion.AP_SOUTHEAST_4,
        "sa-brazil-1":VpnRegion.SA_BRAZIL_1,
        "la-south-2":VpnRegion.LA_SOUTH_2,
        "la-north-2":VpnRegion.LA_NORTH_2,
        "cn-north-9":VpnRegion.CN_NORTH_9,
        "cn-southwest-2":VpnRegion.CN_SOUTHWEST_2,
        "ae-ad-1":VpnRegion.AE_AD_1,
        "eu-west-101":VpnRegion.EU_WEST_101,
        "tr-west-1":VpnRegion.TR_WEST_1,
        "na-mexico-1":VpnRegion.NA_MEXICO_1,
        "me-east-1":VpnRegion.ME_EAST_1,
        "cn-east-5":VpnRegion.CN_EAST_5,
        "af-south-1":VpnRegion.AF_SOUTH_1,
        "ru-moscow-1":VpnRegion.RU_MOSCOW_1
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
