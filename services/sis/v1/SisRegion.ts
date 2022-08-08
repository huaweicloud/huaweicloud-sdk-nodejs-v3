import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class SisRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://sis-ext.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://sis-ext.cn-north-4.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://sis-ext.cn-east-3.myhuaweicloud.com");
    

    private static STATIC_FIELDS = SisRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", SisRegion.CN_NORTH_1);
        map.set("cn-north-4", SisRegion.CN_NORTH_4);
        map.set("cn-east-3", SisRegion.CN_EAST_3);
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
