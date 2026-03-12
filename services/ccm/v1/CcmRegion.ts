import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class CcmRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ccm.cn-north-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ccm.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://ccm.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://ccm.eu-west-101.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://ccm.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://ccm.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":CcmRegion.CN_NORTH_4,
        "ap-southeast-3":CcmRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":CcmRegion.SA_BRAZIL_1,
        "eu-west-101":CcmRegion.EU_WEST_101,
        "ru-moscow-1":CcmRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":CcmRegion.MY_KUALALUMPUR_1
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
