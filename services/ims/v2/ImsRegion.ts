import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ImsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://ims.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://ims.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://ims.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://ims.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://ims.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://ims.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://ims.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://ims.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://ims.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://ims.ap-southeast-3.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://ims.cn-north-2.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://ims.cn-south-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = ImsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", ImsRegion.AF_SOUTH_1);
        map.set("cn-north-4", ImsRegion.CN_NORTH_4);
        map.set("cn-north-1", ImsRegion.CN_NORTH_1);
        map.set("cn-east-2", ImsRegion.CN_EAST_2);
        map.set("cn-east-3", ImsRegion.CN_EAST_3);
        map.set("cn-south-1", ImsRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", ImsRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", ImsRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", ImsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", ImsRegion.AP_SOUTHEAST_3);
        map.set("cn-north-2", ImsRegion.CN_NORTH_2);
        map.set("cn-south-2", ImsRegion.CN_SOUTH_2);
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
