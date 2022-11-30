import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class CseRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://cse.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://cse.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://cse.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://cse.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://cse.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://cse.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://cse.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://cse.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://cse.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://cse.ap-southeast-3.myhuaweicloud.com");
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", "https://cse.ru-northwest-2.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://cse.cn-south-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://cse.cn-north-9.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://cse.sa-brazil-1.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://cse.la-south-2.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://cse.la-north-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = CseRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", CseRegion.AF_SOUTH_1);
        map.set("cn-north-4", CseRegion.CN_NORTH_4);
        map.set("cn-north-1", CseRegion.CN_NORTH_1);
        map.set("cn-east-2", CseRegion.CN_EAST_2);
        map.set("cn-east-3", CseRegion.CN_EAST_3);
        map.set("cn-south-1", CseRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", CseRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", CseRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", CseRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", CseRegion.AP_SOUTHEAST_3);
        map.set("ru-northwest-2", CseRegion.RU_NORTHWEST_2);
        map.set("cn-south-2", CseRegion.CN_SOUTH_2);
        map.set("cn-north-9", CseRegion.CN_NORTH_9);
        map.set("sa-brazil-1", CseRegion.SA_BRAZIL_1);
        map.set("la-south-2", CseRegion.LA_SOUTH_2);
        map.set("la-north-2", CseRegion.LA_NORTH_2);
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
