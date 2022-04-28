import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class IoTDARegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://iotda.cn-north-4.myhuaweicloud.com");
    

    private static STATIC_FIELDS = IoTDARegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", IoTDARegion.CN_NORTH_4);
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
