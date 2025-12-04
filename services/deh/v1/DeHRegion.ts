import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class DeHRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://deh.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://deh.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://deh.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://deh.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://deh.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://deh.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://deh.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://deh.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://deh.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://deh.ap-southeast-3.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://deh.my-kualalumpur-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://deh.sa-brazil-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-1":DeHRegion.CN_NORTH_1,
        "cn-north-2":DeHRegion.CN_NORTH_2,
        "cn-north-4":DeHRegion.CN_NORTH_4,
        "cn-south-1":DeHRegion.CN_SOUTH_1,
        "cn-east-2":DeHRegion.CN_EAST_2,
        "cn-east-3":DeHRegion.CN_EAST_3,
        "cn-southwest-2":DeHRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":DeHRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":DeHRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":DeHRegion.AP_SOUTHEAST_3,
        "my-kualalumpur-1":DeHRegion.MY_KUALALUMPUR_1,
        "sa-brazil-1":DeHRegion.SA_BRAZIL_1
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
