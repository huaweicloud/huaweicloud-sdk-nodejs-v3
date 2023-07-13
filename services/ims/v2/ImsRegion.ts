import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class ImsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://ims.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ims.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ims.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://ims.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ims.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ims.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://ims.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://ims.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ims.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ims.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://ims.cn-north-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://ims.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://ims.cn-north-9.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://ims.la-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://ims.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://ims.la-north-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://ims.na-mexico-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://ims.ap-southeast-4.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://ims.cn-south-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://ims.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":ImsRegion.AF_SOUTH_1,
        "cn-north-4":ImsRegion.CN_NORTH_4,
        "cn-north-1":ImsRegion.CN_NORTH_1,
        "cn-east-2":ImsRegion.CN_EAST_2,
        "cn-east-3":ImsRegion.CN_EAST_3,
        "cn-south-1":ImsRegion.CN_SOUTH_1,
        "cn-southwest-2":ImsRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":ImsRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":ImsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":ImsRegion.AP_SOUTHEAST_3,
        "cn-north-2":ImsRegion.CN_NORTH_2,
        "cn-south-2":ImsRegion.CN_SOUTH_2,
        "cn-north-9":ImsRegion.CN_NORTH_9,
        "la-south-2":ImsRegion.LA_SOUTH_2,
        "sa-brazil-1":ImsRegion.SA_BRAZIL_1,
        "la-north-2":ImsRegion.LA_NORTH_2,
        "na-mexico-1":ImsRegion.NA_MEXICO_1,
        "ap-southeast-4":ImsRegion.AP_SOUTHEAST_4,
        "cn-south-4":ImsRegion.CN_SOUTH_4,
        "tr-west-1":ImsRegion.TR_WEST_1
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
