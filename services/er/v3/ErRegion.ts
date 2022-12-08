import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ErRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://er.cn-south-1.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://er.cn-east-3.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://er.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://er.cn-north-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://er.cn-north-9.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://er.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://er.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://er.ap-southeast-3.myhuaweicloud.com");
    

    private static STATIC_FIELDS = ErRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-south-1", ErRegion.CN_SOUTH_1);
        map.set("cn-east-3", ErRegion.CN_EAST_3);
        map.set("cn-north-4", ErRegion.CN_NORTH_4);
        map.set("cn-north-2", ErRegion.CN_NORTH_2);
        map.set("cn-north-9", ErRegion.CN_NORTH_9);
        map.set("ap-southeast-1", ErRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", ErRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-3", ErRegion.AP_SOUTHEAST_3);
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
