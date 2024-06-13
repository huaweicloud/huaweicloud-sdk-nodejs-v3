import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EpsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://eps.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://eps.eu-west-101.myhuaweicloud.eu"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://eps.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":EpsRegion.CN_NORTH_4,
        "eu-west-101":EpsRegion.EU_WEST_101,
        "ru-moscow-1":EpsRegion.RU_MOSCOW_1
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
