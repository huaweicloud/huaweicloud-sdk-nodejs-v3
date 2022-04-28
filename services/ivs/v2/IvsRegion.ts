import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class IvsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://ivs.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://ivs.cn-north-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = IvsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", IvsRegion.CN_NORTH_4);
        map.set("cn-north-1", IvsRegion.CN_NORTH_1);
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
