import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class AosRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://aos.cn-north-4.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://aos.cn-south-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = AosRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", AosRegion.CN_NORTH_4);
        map.set("cn-south-1", AosRegion.CN_SOUTH_1);
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
