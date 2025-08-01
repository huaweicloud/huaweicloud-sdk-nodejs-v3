import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class FunctionGraphRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://functiongraph.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://functiongraph.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://functiongraph.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://functiongraph.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://functiongraph.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://functiongraph.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://functiongraph.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://functiongraph.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://functiongraph.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://functiongraph.cn-southwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://functiongraph.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://functiongraph.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://functiongraph.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://functiongraph.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://functiongraph.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://functiongraph.eu-west-101.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://functiongraph.tr-west-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://functiongraph.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://functiongraph.cn-north-11.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://functiongraph.me-east-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://functiongraph.my-kualalumpur-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://functiongraph.cn-south-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://functiongraph.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://functiongraph.cn-east-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://functiongraph.ae-ad-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://functiongraph.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":FunctionGraphRegion.CN_NORTH_4,
        "cn-north-1":FunctionGraphRegion.CN_NORTH_1,
        "cn-east-2":FunctionGraphRegion.CN_EAST_2,
        "cn-east-3":FunctionGraphRegion.CN_EAST_3,
        "cn-south-1":FunctionGraphRegion.CN_SOUTH_1,
        "ap-southeast-2":FunctionGraphRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":FunctionGraphRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":FunctionGraphRegion.AP_SOUTHEAST_3,
        "af-south-1":FunctionGraphRegion.AF_SOUTH_1,
        "cn-southwest-2":FunctionGraphRegion.CN_SOUTHWEST_2,
        "sa-brazil-1":FunctionGraphRegion.SA_BRAZIL_1,
        "la-south-2":FunctionGraphRegion.LA_SOUTH_2,
        "na-mexico-1":FunctionGraphRegion.NA_MEXICO_1,
        "la-north-2":FunctionGraphRegion.LA_NORTH_2,
        "ap-southeast-4":FunctionGraphRegion.AP_SOUTHEAST_4,
        "eu-west-101":FunctionGraphRegion.EU_WEST_101,
        "tr-west-1":FunctionGraphRegion.TR_WEST_1,
        "cn-north-9":FunctionGraphRegion.CN_NORTH_9,
        "cn-north-11":FunctionGraphRegion.CN_NORTH_11,
        "me-east-1":FunctionGraphRegion.ME_EAST_1,
        "my-kualalumpur-1":FunctionGraphRegion.MY_KUALALUMPUR_1,
        "cn-south-4":FunctionGraphRegion.CN_SOUTH_4,
        "ru-moscow-1":FunctionGraphRegion.RU_MOSCOW_1,
        "cn-east-4":FunctionGraphRegion.CN_EAST_4,
        "ae-ad-1":FunctionGraphRegion.AE_AD_1,
        "ap-southeast-5":FunctionGraphRegion.AP_SOUTHEAST_5
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
