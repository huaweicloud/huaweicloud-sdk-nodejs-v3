import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class WafRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://waf.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://waf.cn-north-2.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://waf.cn-north-4.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://waf.cn-east-3.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://waf.cn-east-2.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://waf.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://waf.cn-south-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://waf.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://waf.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://waf.ap-southeast-3.myhuaweicloud.com");
    public static AF_SOUTH_1 = new Region("af-south-1", "https://waf.af-south-1.myhuaweicloud.com");
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", "https://waf.ru-northwest-2.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://waf.cn-southwest-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://waf.cn-north-9.myhuaweicloud.cn");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://waf.la-south-2.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://waf.sa-brazil-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://waf.la-north-2.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://waf.na-mexico-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = WafRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", WafRegion.CN_NORTH_1);
        map.set("cn-north-2", WafRegion.CN_NORTH_2);
        map.set("cn-north-4", WafRegion.CN_NORTH_4);
        map.set("cn-east-3", WafRegion.CN_EAST_3);
        map.set("cn-east-2", WafRegion.CN_EAST_2);
        map.set("cn-south-1", WafRegion.CN_SOUTH_1);
        map.set("cn-south-2", WafRegion.CN_SOUTH_2);
        map.set("ap-southeast-1", WafRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", WafRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-3", WafRegion.AP_SOUTHEAST_3);
        map.set("af-south-1", WafRegion.AF_SOUTH_1);
        map.set("ru-northwest-2", WafRegion.RU_NORTHWEST_2);
        map.set("cn-southwest-2", WafRegion.CN_SOUTHWEST_2);
        map.set("cn-north-9", WafRegion.CN_NORTH_9);
        map.set("la-south-2", WafRegion.LA_SOUTH_2);
        map.set("sa-brazil-1", WafRegion.SA_BRAZIL_1);
        map.set("la-north-2", WafRegion.LA_NORTH_2);
        map.set("na-mexico-1", WafRegion.NA_MEXICO_1);
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
