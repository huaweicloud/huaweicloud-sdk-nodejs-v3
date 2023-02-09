import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class CdnRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://cdn.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://cdn.myhuaweicloud.com");
    

    private static STATIC_FIELDS = CdnRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", CdnRegion.CN_NORTH_1);
        map.set("ap-southeast-1", CdnRegion.AP_SOUTHEAST_1);
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
