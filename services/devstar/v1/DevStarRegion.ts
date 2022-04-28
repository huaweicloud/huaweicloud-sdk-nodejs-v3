import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class DevStarRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://devstar.cn-north-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = DevStarRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", DevStarRegion.CN_NORTH_1);
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
