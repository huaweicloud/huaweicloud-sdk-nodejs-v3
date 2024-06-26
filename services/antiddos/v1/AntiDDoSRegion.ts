import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AntiDDoSRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://antiddos.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://antiddos.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://antiddos.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://antiddos.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://antiddos.cn-east-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://antiddos.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://antiddos.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://antiddos.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://antiddos.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://antiddos.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://antiddos.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://antiddos.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://antiddos.af-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://antiddos.ru-northwest-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://antiddos.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://antiddos.sa-brazil-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://antiddos.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://antiddos.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://antiddos.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://antiddos.ap-southeast-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://antiddos.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://antiddos.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://antiddos.my-kualalumpur-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://antiddos.me-east-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":AntiDDoSRegion.CN_NORTH_1,
        "cn-north-2":AntiDDoSRegion.CN_NORTH_2,
        "cn-north-4":AntiDDoSRegion.CN_NORTH_4,
        "cn-east-3":AntiDDoSRegion.CN_EAST_3,
        "cn-east-2":AntiDDoSRegion.CN_EAST_2,
        "cn-south-1":AntiDDoSRegion.CN_SOUTH_1,
        "cn-south-2":AntiDDoSRegion.CN_SOUTH_2,
        "cn-south-4":AntiDDoSRegion.CN_SOUTH_4,
        "cn-southwest-2":AntiDDoSRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":AntiDDoSRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":AntiDDoSRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":AntiDDoSRegion.AP_SOUTHEAST_3,
        "af-south-1":AntiDDoSRegion.AF_SOUTH_1,
        "ru-northwest-2":AntiDDoSRegion.RU_NORTHWEST_2,
        "la-south-2":AntiDDoSRegion.LA_SOUTH_2,
        "sa-brazil-1":AntiDDoSRegion.SA_BRAZIL_1,
        "na-mexico-1":AntiDDoSRegion.NA_MEXICO_1,
        "la-north-2":AntiDDoSRegion.LA_NORTH_2,
        "cn-north-9":AntiDDoSRegion.CN_NORTH_9,
        "ap-southeast-4":AntiDDoSRegion.AP_SOUTHEAST_4,
        "ae-ad-1":AntiDDoSRegion.AE_AD_1,
        "eu-west-0":AntiDDoSRegion.EU_WEST_0,
        "my-kualalumpur-1":AntiDDoSRegion.MY_KUALALUMPUR_1,
        "me-east-1":AntiDDoSRegion.ME_EAST_1
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
