import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SmsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sms.cn-north-4.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sms.ap-southeast-3.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://sms.my-kualalumpur-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://sms-api.ru-moscow-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":SmsRegion.CN_NORTH_4,
        "ap-southeast-3":SmsRegion.AP_SOUTHEAST_3,
        "my-kualalumpur-1":SmsRegion.MY_KUALALUMPUR_1,
        "ru-moscow-1":SmsRegion.RU_MOSCOW_1
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
