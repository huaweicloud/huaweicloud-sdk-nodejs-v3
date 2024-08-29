import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ElbRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://elb.eu-west-101.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://elb.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://elb.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://elb.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://elb.cn-north-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://elb.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://elb.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://elb.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://elb.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://elb.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://elb.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://elb.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://elb.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://elb.cn-north-9.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://elb.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://elb.sa-brazil-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://elb.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://elb.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://elb.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://elb.tr-west-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://elb.ae-ad-1.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://elb.eu-west-0.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://elb.me-east-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://elb.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://elb.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://elb.cn-east-4.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://elb.af-north-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://elb.cn-east-5.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://elb.ru-northwest-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":ElbRegion.EU_WEST_101,
        "af-south-1":ElbRegion.AF_SOUTH_1,
        "cn-north-4":ElbRegion.CN_NORTH_4,
        "cn-north-1":ElbRegion.CN_NORTH_1,
        "cn-north-2":ElbRegion.CN_NORTH_2,
        "cn-east-2":ElbRegion.CN_EAST_2,
        "cn-east-3":ElbRegion.CN_EAST_3,
        "cn-south-1":ElbRegion.CN_SOUTH_1,
        "cn-south-2":ElbRegion.CN_SOUTH_2,
        "cn-southwest-2":ElbRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":ElbRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":ElbRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":ElbRegion.AP_SOUTHEAST_3,
        "cn-north-9":ElbRegion.CN_NORTH_9,
        "la-south-2":ElbRegion.LA_SOUTH_2,
        "sa-brazil-1":ElbRegion.SA_BRAZIL_1,
        "na-mexico-1":ElbRegion.NA_MEXICO_1,
        "la-north-2":ElbRegion.LA_NORTH_2,
        "ap-southeast-4":ElbRegion.AP_SOUTHEAST_4,
        "tr-west-1":ElbRegion.TR_WEST_1,
        "ae-ad-1":ElbRegion.AE_AD_1,
        "eu-west-0":ElbRegion.EU_WEST_0,
        "me-east-1":ElbRegion.ME_EAST_1,
        "my-kualalumpur-1":ElbRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":ElbRegion.RU_MOSCOW_1,
        "cn-east-4":ElbRegion.CN_EAST_4,
        "af-north-1":ElbRegion.AF_NORTH_1,
        "cn-east-5":ElbRegion.CN_EAST_5,
        "ru-northwest-2":ElbRegion.RU_NORTHWEST_2
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
