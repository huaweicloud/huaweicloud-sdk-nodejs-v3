import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class StsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sts.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://sts.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://sts.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://sts.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://sts.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sts.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://sts.ap-southeast-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://sts.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://sts.la-south-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://sts.af-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://sts.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://sts.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":StsRegion.CN_NORTH_4,
        "cn-south-1":StsRegion.CN_SOUTH_1,
        "cn-east-3":StsRegion.CN_EAST_3,
        "cn-southwest-2":StsRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":StsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":StsRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":StsRegion.AP_SOUTHEAST_2,
        "sa-brazil-1":StsRegion.SA_BRAZIL_1,
        "la-south-2":StsRegion.LA_SOUTH_2,
        "af-south-1":StsRegion.AF_SOUTH_1,
        "ap-southeast-4":StsRegion.AP_SOUTHEAST_4,
        "tr-west-1":StsRegion.TR_WEST_1
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
