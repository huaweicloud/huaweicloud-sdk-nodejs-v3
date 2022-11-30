import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class EcsRegion {
    public static CN_NORTH_1 = new Region("cn-north-1", "https://ecs.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://ecs.cn-north-4.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://ecs.cn-south-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://ecs.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://ecs.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://ecs.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://ecs.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://ecs.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://ecs.ap-southeast-3.myhuaweicloud.com");
    public static AF_SOUTH_1 = new Region("af-south-1", "https://ecs.af-south-1.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://ecs.sa-brazil-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://ecs.la-north-2.myhuaweicloud.com");
    public static CN_SOUTH_4 = new Region("cn-south-4", "https://ecs.cn-south-4.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://ecs.na-mexico-1.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://ecs.la-south-2.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://ecs.cn-south-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://ecs.cn-north-9.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://ecs.cn-north-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", "https://ecs.ap-southeast-4.myhuaweicloud.com");
    

    private static STATIC_FIELDS = EcsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-1", EcsRegion.CN_NORTH_1);
        map.set("cn-north-4", EcsRegion.CN_NORTH_4);
        map.set("cn-south-1", EcsRegion.CN_SOUTH_1);
        map.set("cn-east-2", EcsRegion.CN_EAST_2);
        map.set("cn-east-3", EcsRegion.CN_EAST_3);
        map.set("cn-southwest-2", EcsRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-1", EcsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", EcsRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-3", EcsRegion.AP_SOUTHEAST_3);
        map.set("af-south-1", EcsRegion.AF_SOUTH_1);
        map.set("sa-brazil-1", EcsRegion.SA_BRAZIL_1);
        map.set("la-north-2", EcsRegion.LA_NORTH_2);
        map.set("cn-south-4", EcsRegion.CN_SOUTH_4);
        map.set("na-mexico-1", EcsRegion.NA_MEXICO_1);
        map.set("la-south-2", EcsRegion.LA_SOUTH_2);
        map.set("cn-south-2", EcsRegion.CN_SOUTH_2);
        map.set("cn-north-9", EcsRegion.CN_NORTH_9);
        map.set("cn-north-2", EcsRegion.CN_NORTH_2);
        map.set("ap-southeast-4", EcsRegion.AP_SOUTHEAST_4);
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
