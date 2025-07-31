import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EgRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://eg.cn-north-4.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://eg.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://eg.cn-east-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://eg.sa-brazil-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://eg.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://eg.cn-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://eg.cn-north-11.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://eg.cn-north-9.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://eg.na-mexico-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://eg.eu-west-101.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":EgRegion.CN_NORTH_4,
        "cn-east-2":EgRegion.CN_EAST_2,
        "cn-east-3":EgRegion.CN_EAST_3,
        "sa-brazil-1":EgRegion.SA_BRAZIL_1,
        "ap-southeast-3":EgRegion.AP_SOUTHEAST_3,
        "cn-south-1":EgRegion.CN_SOUTH_1,
        "cn-north-11":EgRegion.CN_NORTH_11,
        "cn-north-9":EgRegion.CN_NORTH_9,
        "na-mexico-1":EgRegion.NA_MEXICO_1,
        "eu-west-101":EgRegion.EU_WEST_101
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
