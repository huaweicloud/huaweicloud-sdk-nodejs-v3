import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class SmsRegion {
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://sms.ap-southeast-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = SmsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("ap-southeast-1", SmsRegion.AP_SOUTHEAST_1);
        return map;
    }
    public static valueOf(regionId: String) {
        if (!regionId) {
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.STATIC_FIELDS.get(regionId);
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
