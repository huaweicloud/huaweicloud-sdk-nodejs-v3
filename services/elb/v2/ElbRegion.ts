import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ElbRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://elb.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://elb.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://elb.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://elb.cn-north-2.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://elb.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://elb.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://elb.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://elb.cn-south-2.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://elb.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://elb.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://elb.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://elb.ap-southeast-3.myhuaweicloud.com");
    

    private static STATIC_FIELDS = ElbRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", ElbRegion.AF_SOUTH_1);
        map.set("cn-north-4", ElbRegion.CN_NORTH_4);
        map.set("cn-north-1", ElbRegion.CN_NORTH_1);
        map.set("cn-north-2", ElbRegion.CN_NORTH_2);
        map.set("cn-east-2", ElbRegion.CN_EAST_2);
        map.set("cn-east-3", ElbRegion.CN_EAST_3);
        map.set("cn-south-1", ElbRegion.CN_SOUTH_1);
        map.set("cn-south-2", ElbRegion.CN_SOUTH_2);
        map.set("cn-southwest-2", ElbRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", ElbRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", ElbRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", ElbRegion.AP_SOUTHEAST_3);
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
