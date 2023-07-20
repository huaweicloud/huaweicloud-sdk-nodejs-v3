import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DwsRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://dws.eu-west-101.myhuaweicloud.eu"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://dws.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://dws.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://dws.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://dws.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://dws.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://dws.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://dws.cn-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://dws.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://dws.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://dws.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://dws.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://dws.af-south-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://dws.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://dws.sa-brazil-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://dws.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://dws.la-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":DwsRegion.EU_WEST_101,
        "cn-north-9":DwsRegion.CN_NORTH_9,
        "cn-east-3":DwsRegion.CN_EAST_3,
        "cn-east-2":DwsRegion.CN_EAST_2,
        "cn-north-1":DwsRegion.CN_NORTH_1,
        "cn-north-4":DwsRegion.CN_NORTH_4,
        "cn-southwest-2":DwsRegion.CN_SOUTHWEST_2,
        "cn-north-2":DwsRegion.CN_NORTH_2,
        "cn-south-1":DwsRegion.CN_SOUTH_1,
        "ap-southeast-1":DwsRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DwsRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":DwsRegion.AP_SOUTHEAST_3,
        "af-south-1":DwsRegion.AF_SOUTH_1,
        "la-south-2":DwsRegion.LA_SOUTH_2,
        "sa-brazil-1":DwsRegion.SA_BRAZIL_1,
        "na-mexico-1":DwsRegion.NA_MEXICO_1,
        "la-north-2":DwsRegion.LA_NORTH_2
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
