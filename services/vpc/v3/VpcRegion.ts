import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class VpcRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://vpc.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://vpc.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://vpc.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://vpc.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://vpc.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://vpc.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://vpc.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://vpc.ap-southeast-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://vpc.cn-north-9.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://vpc.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://vpc.ap-southeast-3.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://vpc.sa-brazil-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://vpc.la-north-2.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://vpc.cn-south-2.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://vpc.cn-north-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = VpcRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", VpcRegion.AF_SOUTH_1);
        map.set("cn-north-4", VpcRegion.CN_NORTH_4);
        map.set("cn-north-1", VpcRegion.CN_NORTH_1);
        map.set("cn-east-2", VpcRegion.CN_EAST_2);
        map.set("cn-east-3", VpcRegion.CN_EAST_3);
        map.set("cn-south-1", VpcRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", VpcRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", VpcRegion.AP_SOUTHEAST_2);
        map.set("cn-north-9", VpcRegion.CN_NORTH_9);
        map.set("ap-southeast-1", VpcRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", VpcRegion.AP_SOUTHEAST_3);
        map.set("sa-brazil-1", VpcRegion.SA_BRAZIL_1);
        map.set("la-north-2", VpcRegion.LA_NORTH_2);
        map.set("cn-south-2", VpcRegion.CN_SOUTH_2);
        map.set("cn-north-2", VpcRegion.CN_NORTH_2);
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
