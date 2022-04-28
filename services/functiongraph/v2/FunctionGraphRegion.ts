import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class FunctionGraphRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://functiongraph.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://functiongraph.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://functiongraph.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://functiongraph.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://functiongraph.cn-south-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://functiongraph.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://functiongraph.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://functiongraph.ap-southeast-3.myhuaweicloud.com");
    public static AF_SOUTH_1 = new Region("af-south-1", "https://functiongraph.af-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://functiongraph.cn-southwest-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = FunctionGraphRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", FunctionGraphRegion.CN_NORTH_4);
        map.set("cn-north-1", FunctionGraphRegion.CN_NORTH_1);
        map.set("cn-east-2", FunctionGraphRegion.CN_EAST_2);
        map.set("cn-east-3", FunctionGraphRegion.CN_EAST_3);
        map.set("cn-south-1", FunctionGraphRegion.CN_SOUTH_1);
        map.set("ap-southeast-2", FunctionGraphRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", FunctionGraphRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", FunctionGraphRegion.AP_SOUTHEAST_3);
        map.set("af-south-1", FunctionGraphRegion.AF_SOUTH_1);
        map.set("cn-southwest-2", FunctionGraphRegion.CN_SOUTHWEST_2);
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
