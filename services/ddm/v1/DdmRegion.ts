import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DdmRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://ddm.eu-west-101.myhuaweicloud.eu"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://ddm.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://ddm.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ddm.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://ddm.cn-north-9.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ddm.cn-east-3.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://ddm.cn-east-2.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ddm.cn-north-1.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ddm.cn-south-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ddm.ap-southeast-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://ddm.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://ddm.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://ddm.la-south-2.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://ddm.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://ddm.ru-moscow-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://ddm.ae-ad-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":DdmRegion.EU_WEST_101,
        "cn-southwest-2":DdmRegion.CN_SOUTHWEST_2,
        "cn-south-2":DdmRegion.CN_SOUTH_2,
        "cn-north-4":DdmRegion.CN_NORTH_4,
        "cn-north-9":DdmRegion.CN_NORTH_9,
        "cn-east-3":DdmRegion.CN_EAST_3,
        "cn-east-2":DdmRegion.CN_EAST_2,
        "cn-north-1":DdmRegion.CN_NORTH_1,
        "cn-south-1":DdmRegion.CN_SOUTH_1,
        "ap-southeast-1":DdmRegion.AP_SOUTHEAST_1,
        "la-north-2":DdmRegion.LA_NORTH_2,
        "sa-brazil-1":DdmRegion.SA_BRAZIL_1,
        "la-south-2":DdmRegion.LA_SOUTH_2,
        "my-kualalumpur-1":DdmRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":DdmRegion.RU_MOSCOW_1,
        "ae-ad-1":DdmRegion.AE_AD_1
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
