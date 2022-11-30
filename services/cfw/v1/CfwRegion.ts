import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class CfwRegion {
    public static CN_SOUTH_4 = new Region("cn-south-4", "https://cfw.cn-south-4.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://cfw.cn-southwest-2.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://cfw.cn-south-1.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://cfw.cn-east-3.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://cfw.cn-north-4.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://cfw.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://cfw.ap-southeast-3.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://cfw.la-north-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://cfw.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", "https://cfw.ap-southeast-4.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://cfw.la-south-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = CfwRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-south-4", CfwRegion.CN_SOUTH_4);
        map.set("cn-southwest-2", CfwRegion.CN_SOUTHWEST_2);
        map.set("cn-south-1", CfwRegion.CN_SOUTH_1);
        map.set("cn-east-3", CfwRegion.CN_EAST_3);
        map.set("cn-north-4", CfwRegion.CN_NORTH_4);
        map.set("ap-southeast-1", CfwRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", CfwRegion.AP_SOUTHEAST_3);
        map.set("la-north-2", CfwRegion.LA_NORTH_2);
        map.set("ap-southeast-2", CfwRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-4", CfwRegion.AP_SOUTHEAST_4);
        map.set("la-south-2", CfwRegion.LA_SOUTH_2);
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
