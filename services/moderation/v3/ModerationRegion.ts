import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ModerationRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://moderation.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://moderation.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://moderation.cn-east-3.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://moderation.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://moderation.ap-southeast-3.myhuaweicloud.com");
    

    private static STATIC_FIELDS = ModerationRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", ModerationRegion.CN_NORTH_4);
        map.set("cn-north-1", ModerationRegion.CN_NORTH_1);
        map.set("cn-east-3", ModerationRegion.CN_EAST_3);
        map.set("ap-southeast-1", ModerationRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", ModerationRegion.AP_SOUTHEAST_3);
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
