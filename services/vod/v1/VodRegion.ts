import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class VodRegion {
    public static CN_EAST_2 = new Region("cn-east-2", "https://vod.cn-east-2.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://vod.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://vod.cn-north-4.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://vod.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://vod.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://vod.ap-southeast-3.myhuaweicloud.com");
    

    private static STATIC_FIELDS = VodRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-east-2", VodRegion.CN_EAST_2);
        map.set("cn-north-1", VodRegion.CN_NORTH_1);
        map.set("cn-north-4", VodRegion.CN_NORTH_4);
        map.set("ap-southeast-1", VodRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", VodRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-3", VodRegion.AP_SOUTHEAST_3);
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
