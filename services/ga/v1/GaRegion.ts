import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class GaRegion {
    public static CN_EAST_3 = new Region("cn-east-3", "https://ga.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://ga.myhuaweicloud.com");
    

    private static STATIC_FIELDS = GaRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-east-3", GaRegion.CN_EAST_3);
        map.set("cn-southwest-2", GaRegion.CN_SOUTHWEST_2);
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
