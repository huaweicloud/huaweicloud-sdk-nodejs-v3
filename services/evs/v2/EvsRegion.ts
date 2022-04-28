import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class EvsRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://evs.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://evs.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://evs.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://evs.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://evs.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://evs.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://evs.cn-south-2.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://evs.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://evs.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://evs.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://evs.ap-southeast-3.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://evs.sa-brazil-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://evs.la-north-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = EvsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", EvsRegion.AF_SOUTH_1);
        map.set("cn-north-4", EvsRegion.CN_NORTH_4);
        map.set("cn-north-1", EvsRegion.CN_NORTH_1);
        map.set("cn-east-2", EvsRegion.CN_EAST_2);
        map.set("cn-east-3", EvsRegion.CN_EAST_3);
        map.set("cn-south-1", EvsRegion.CN_SOUTH_1);
        map.set("cn-south-2", EvsRegion.CN_SOUTH_2);
        map.set("cn-southwest-2", EvsRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", EvsRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", EvsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", EvsRegion.AP_SOUTHEAST_3);
        map.set("sa-brazil-1", EvsRegion.SA_BRAZIL_1);
        map.set("la-north-2", EvsRegion.LA_NORTH_2);
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
