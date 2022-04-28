import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class FrsRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://face.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://face.cn-north-4.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://face.cn-south-1.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://face.cn-east-3.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://face.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://face.ap-southeast-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = FrsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", FrsRegion.CN_NORTH_1);
        map.set("cn-north-4", FrsRegion.CN_NORTH_4);
        map.set("cn-south-1", FrsRegion.CN_SOUTH_1);
        map.set("cn-east-3", FrsRegion.CN_EAST_3);
        map.set("ap-southeast-1", FrsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", FrsRegion.AP_SOUTHEAST_2);
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
