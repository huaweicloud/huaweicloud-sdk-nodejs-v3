import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CfwRegion {
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://cfw.cn-southwest-3.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://cfw.cn-north-12.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://cfw.ru-moscow-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://cfw.eu-west-101.myhuaweicloud.eu"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://cfw.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cfw.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cfw.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cfw.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cfw.cn-north-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cfw.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cfw.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cfw.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cfw.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cfw.ap-southeast-4.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cfw.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cfw.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cfw.cn-east-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cfw.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cfw.sa-brazil-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cfw.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://cfw.me-east-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://cfw.cn-north-11.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cfw.cn-south-2.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://cfw.cn-east-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://cfw.ap-southeast-5.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://cfw.af-north-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://cfw.cn-east-5.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://cfw.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-southwest-3":CfwRegion.CN_SOUTHWEST_3,
        "cn-north-12":CfwRegion.CN_NORTH_12,
        "ru-moscow-1":CfwRegion.RU_MOSCOW_1,
        "eu-west-101":CfwRegion.EU_WEST_101,
        "cn-south-4":CfwRegion.CN_SOUTH_4,
        "cn-southwest-2":CfwRegion.CN_SOUTHWEST_2,
        "cn-south-1":CfwRegion.CN_SOUTH_1,
        "cn-east-3":CfwRegion.CN_EAST_3,
        "cn-north-4":CfwRegion.CN_NORTH_4,
        "ap-southeast-1":CfwRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":CfwRegion.AP_SOUTHEAST_3,
        "la-north-2":CfwRegion.LA_NORTH_2,
        "ap-southeast-2":CfwRegion.AP_SOUTHEAST_2,
        "ap-southeast-4":CfwRegion.AP_SOUTHEAST_4,
        "la-south-2":CfwRegion.LA_SOUTH_2,
        "cn-north-9":CfwRegion.CN_NORTH_9,
        "cn-east-2":CfwRegion.CN_EAST_2,
        "af-south-1":CfwRegion.AF_SOUTH_1,
        "sa-brazil-1":CfwRegion.SA_BRAZIL_1,
        "tr-west-1":CfwRegion.TR_WEST_1,
        "me-east-1":CfwRegion.ME_EAST_1,
        "cn-north-11":CfwRegion.CN_NORTH_11,
        "cn-south-2":CfwRegion.CN_SOUTH_2,
        "cn-east-4":CfwRegion.CN_EAST_4,
        "ap-southeast-5":CfwRegion.AP_SOUTHEAST_5,
        "af-north-1":CfwRegion.AF_NORTH_1,
        "cn-east-5":CfwRegion.CN_EAST_5,
        "my-kualalumpur-1":CfwRegion.MY_KUALALUMPUR_1
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
