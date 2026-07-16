import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ModelArtsRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://modelarts.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://modelarts.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://modelarts.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://modelarts.ap-southeast-1.myhuaweicloud.cn"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://modelarts.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://modelarts.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://modelarts.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://modelarts.cn-east-4.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://modelarts.la-south-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://modelarts.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://modelarts.cn-north-9.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://modelarts.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://modelarts.ap-southeast-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://modelarts.me-east-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://modelarts.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://modelarts.cn-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://modelarts.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://modelarts.la-north-2.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://modelarts.af-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://modelarts.cn-north-12.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://modelarts.cn-southwest-3.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://modelarts.cn-north-11.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":ModelArtsRegion.CN_NORTH_1,
        "cn-north-4":ModelArtsRegion.CN_NORTH_4,
        "cn-south-1":ModelArtsRegion.CN_SOUTH_1,
        "ap-southeast-1":ModelArtsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":ModelArtsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":ModelArtsRegion.AP_SOUTHEAST_3,
        "cn-east-3":ModelArtsRegion.CN_EAST_3,
        "cn-east-4":ModelArtsRegion.CN_EAST_4,
        "la-south-2":ModelArtsRegion.LA_SOUTH_2,
        "af-south-1":ModelArtsRegion.AF_SOUTH_1,
        "cn-north-9":ModelArtsRegion.CN_NORTH_9,
        "tr-west-1":ModelArtsRegion.TR_WEST_1,
        "ap-southeast-4":ModelArtsRegion.AP_SOUTHEAST_4,
        "me-east-1":ModelArtsRegion.ME_EAST_1,
        "cn-southwest-2":ModelArtsRegion.CN_SOUTHWEST_2,
        "cn-north-2":ModelArtsRegion.CN_NORTH_2,
        "sa-brazil-1":ModelArtsRegion.SA_BRAZIL_1,
        "la-north-2":ModelArtsRegion.LA_NORTH_2,
        "af-north-1":ModelArtsRegion.AF_NORTH_1,
        "cn-north-12":ModelArtsRegion.CN_NORTH_12,
        "cn-southwest-3":ModelArtsRegion.CN_SOUTHWEST_3,
        "cn-north-11":ModelArtsRegion.CN_NORTH_11
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
