import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EcsRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ecs.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ecs.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ecs.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://ecs.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ecs.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://ecs.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ecs.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://ecs.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ecs.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://ecs.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://ecs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://ecs.la-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://ecs.cn-south-4.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://ecs.na-mexico-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://ecs.la-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://ecs.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://ecs.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://ecs.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://ecs.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://ecs.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://ecs.me-east-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://ecs.ae-ad-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://ecs.cn-east-4.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://ecs.eu-west-101.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://ecs.cn-east-5.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://ecs.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://ecs.my-kualalumpur-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://ecs.af-north-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://ecs.ru-moscow-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://ecs.ap-southeast-5.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://ecs.cn-north-11.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":EcsRegion.CN_NORTH_1,
        "cn-north-4":EcsRegion.CN_NORTH_4,
        "cn-south-1":EcsRegion.CN_SOUTH_1,
        "cn-east-2":EcsRegion.CN_EAST_2,
        "cn-east-3":EcsRegion.CN_EAST_3,
        "cn-southwest-2":EcsRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":EcsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":EcsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":EcsRegion.AP_SOUTHEAST_3,
        "af-south-1":EcsRegion.AF_SOUTH_1,
        "sa-brazil-1":EcsRegion.SA_BRAZIL_1,
        "la-north-2":EcsRegion.LA_NORTH_2,
        "cn-south-4":EcsRegion.CN_SOUTH_4,
        "na-mexico-1":EcsRegion.NA_MEXICO_1,
        "la-south-2":EcsRegion.LA_SOUTH_2,
        "cn-south-2":EcsRegion.CN_SOUTH_2,
        "cn-north-9":EcsRegion.CN_NORTH_9,
        "cn-north-2":EcsRegion.CN_NORTH_2,
        "ap-southeast-4":EcsRegion.AP_SOUTHEAST_4,
        "tr-west-1":EcsRegion.TR_WEST_1,
        "me-east-1":EcsRegion.ME_EAST_1,
        "ae-ad-1":EcsRegion.AE_AD_1,
        "cn-east-4":EcsRegion.CN_EAST_4,
        "eu-west-101":EcsRegion.EU_WEST_101,
        "cn-east-5":EcsRegion.CN_EAST_5,
        "eu-west-0":EcsRegion.EU_WEST_0,
        "my-kualalumpur-1":EcsRegion.MY_KUALALUMPUR_1,
        "af-north-1":EcsRegion.AF_NORTH_1,
        "ru-moscow-1":EcsRegion.RU_MOSCOW_1,
        "ap-southeast-5":EcsRegion.AP_SOUTHEAST_5,
        "cn-north-11":EcsRegion.CN_NORTH_11
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
