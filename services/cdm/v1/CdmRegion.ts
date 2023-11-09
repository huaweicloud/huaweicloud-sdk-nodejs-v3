import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CdmRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://cdm.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://cdm.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://cdm.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://cdm.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://cdm.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://cdm.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cdm.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://cdm.cn-southwest-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://cdm.sa-brazil-1.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://cdm.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://cdm.cn-south-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://cdm.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://cdm.cn-north-9.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://cdm.cn-north-2.myhuaweicloud.cn"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://cdm.na-mexico-1.myhuaweicloud.cn"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://cdm.la-north-2.myhuaweicloud.cn"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://cdm.ap-southeast-3.myhuaweicloud.cn"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://cdm.ap-southeast-4.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://cdm.tr-west-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CdmRegion.CN_NORTH_4,
        "cn-north-1":CdmRegion.CN_NORTH_1,
        "cn-east-2":CdmRegion.CN_EAST_2,
        "cn-east-3":CdmRegion.CN_EAST_3,
        "cn-south-1":CdmRegion.CN_SOUTH_1,
        "ap-southeast-2":CdmRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":CdmRegion.AP_SOUTHEAST_1,
        "cn-southwest-2":CdmRegion.CN_SOUTHWEST_2,
        "sa-brazil-1":CdmRegion.SA_BRAZIL_1,
        "af-south-1":CdmRegion.AF_SOUTH_1,
        "cn-south-2":CdmRegion.CN_SOUTH_2,
        "la-south-2":CdmRegion.LA_SOUTH_2,
        "cn-north-9":CdmRegion.CN_NORTH_9,
        "cn-north-2":CdmRegion.CN_NORTH_2,
        "na-mexico-1":CdmRegion.NA_MEXICO_1,
        "la-north-2":CdmRegion.LA_NORTH_2,
        "ap-southeast-3":CdmRegion.AP_SOUTHEAST_3,
        "ap-southeast-4":CdmRegion.AP_SOUTHEAST_4,
        "tr-west-1":CdmRegion.TR_WEST_1
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
