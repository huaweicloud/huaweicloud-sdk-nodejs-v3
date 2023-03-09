import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class KpsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://kms.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://kms.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://kms.cn-north-2.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://kms.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://kms.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://kms.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://kms.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://kms.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://kms.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://kms.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://kms.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://kms.la-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://kms.ap-southeast-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":KpsRegion.CN_NORTH_4,
        "cn-north-1":KpsRegion.CN_NORTH_1,
        "cn-north-2":KpsRegion.CN_NORTH_2,
        "cn-east-2":KpsRegion.CN_EAST_2,
        "cn-east-3":KpsRegion.CN_EAST_3,
        "cn-south-1":KpsRegion.CN_SOUTH_1,
        "cn-southwest-2":KpsRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":KpsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":KpsRegion.AP_SOUTHEAST_3,
        "la-south-2":KpsRegion.LA_SOUTH_2,
        "sa-brazil-1":KpsRegion.SA_BRAZIL_1,
        "la-north-2":KpsRegion.LA_NORTH_2,
        "ap-southeast-2":KpsRegion.AP_SOUTHEAST_2
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
