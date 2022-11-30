import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class SmnRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", "https://smn.af-south-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://smn.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://smn.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://smn.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://smn.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://smn.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://smn.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://smn.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://smn.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://smn.ap-southeast-3.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://smn.cn-north-2.myhuaweicloud.cn");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://smn.cn-south-2.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://smn.na-mexico-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://smn.la-north-2.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://smn.sa-brazil-1.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://smn.la-south-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://smn.cn-north-9.myhuaweicloud.com");
    

    private static STATIC_FIELDS = SmnRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("af-south-1", SmnRegion.AF_SOUTH_1);
        map.set("cn-north-4", SmnRegion.CN_NORTH_4);
        map.set("cn-north-1", SmnRegion.CN_NORTH_1);
        map.set("cn-east-2", SmnRegion.CN_EAST_2);
        map.set("cn-east-3", SmnRegion.CN_EAST_3);
        map.set("cn-south-1", SmnRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", SmnRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-2", SmnRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-1", SmnRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", SmnRegion.AP_SOUTHEAST_3);
        map.set("cn-north-2", SmnRegion.CN_NORTH_2);
        map.set("cn-south-2", SmnRegion.CN_SOUTH_2);
        map.set("na-mexico-1", SmnRegion.NA_MEXICO_1);
        map.set("la-north-2", SmnRegion.LA_NORTH_2);
        map.set("sa-brazil-1", SmnRegion.SA_BRAZIL_1);
        map.set("la-south-2", SmnRegion.LA_SOUTH_2);
        map.set("cn-north-9", SmnRegion.CN_NORTH_9);
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
