import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class AosRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://rfs.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://rfs.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://rfs.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://rfs.cn-east-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://rfs.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://rfs.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://rfs.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://rfs.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://rfs.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://rfs.ap-southeast-4.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://rfs.my-kualalumpur-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://rfs.me-east-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://rfs.tr-west-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://rfs.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://rfs.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://rfs.la-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://rfs.af-south-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://aos.myhuaweicloud.eu"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://rfs.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://rfs.cn-north-11.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://rfs.cn-east-5.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://rfs.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":AosRegion.CN_NORTH_4,
        "cn-south-1":AosRegion.CN_SOUTH_1,
        "cn-east-3":AosRegion.CN_EAST_3,
        "cn-east-4":AosRegion.CN_EAST_4,
        "cn-north-9":AosRegion.CN_NORTH_9,
        "cn-southwest-2":AosRegion.CN_SOUTHWEST_2,
        "ap-southeast-3":AosRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":AosRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":AosRegion.AP_SOUTHEAST_1,
        "ap-southeast-4":AosRegion.AP_SOUTHEAST_4,
        "my-kualalumpur-1":AosRegion.MY_KUALALUMPUR_1,
        "me-east-1":AosRegion.ME_EAST_1,
        "tr-west-1":AosRegion.TR_WEST_1,
        "la-south-2":AosRegion.LA_SOUTH_2,
        "sa-brazil-1":AosRegion.SA_BRAZIL_1,
        "la-north-2":AosRegion.LA_NORTH_2,
        "af-south-1":AosRegion.AF_SOUTH_1,
        "eu-west-101":AosRegion.EU_WEST_101,
        "na-mexico-1":AosRegion.NA_MEXICO_1,
        "cn-north-11":AosRegion.CN_NORTH_11,
        "cn-east-5":AosRegion.CN_EAST_5,
        "af-north-1":AosRegion.AF_NORTH_1
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
