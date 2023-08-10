import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class OmsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://oms.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://oms.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://oms.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://oms.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://oms.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://oms.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://oms.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://oms.la-south-2.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://oms.cn-south-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://oms.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://oms.ap-southeast-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://oms.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://oms.ap-southeast-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://oms.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://oms.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":OmsRegion.CN_NORTH_4,
        "cn-north-1":OmsRegion.CN_NORTH_1,
        "cn-east-2":OmsRegion.CN_EAST_2,
        "cn-east-3":OmsRegion.CN_EAST_3,
        "cn-south-1":OmsRegion.CN_SOUTH_1,
        "ap-southeast-1":OmsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":OmsRegion.AP_SOUTHEAST_3,
        "la-south-2":OmsRegion.LA_SOUTH_2,
        "cn-south-4":OmsRegion.CN_SOUTH_4,
        "cn-southwest-2":OmsRegion.CN_SOUTHWEST_2,
        "ap-southeast-4":OmsRegion.AP_SOUTHEAST_4,
        "cn-north-9":OmsRegion.CN_NORTH_9,
        "ap-southeast-2":OmsRegion.AP_SOUTHEAST_2,
        "la-north-2":OmsRegion.LA_NORTH_2,
        "tr-west-1":OmsRegion.TR_WEST_1
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
