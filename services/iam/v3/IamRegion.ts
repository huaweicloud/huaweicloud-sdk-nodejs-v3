import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class IamRegion {
    public static CN_NORTH_2 = new Region("cn-north-2", "https://iam.cn-north-2.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://iam.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://iam.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://iam.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://iam.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://iam.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTH_2 = new Region("cn-south-2", "https://iam.cn-south-2.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://iam.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://iam.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://iam.ap-southeast-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://iam.ap-southeast-3.myhuaweicloud.com");
    public static AF_SOUTH_1 = new Region("af-south-1", "https://iam.af-south-1.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://iam.sa-brazil-1.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://iam.la-south-2.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://iam.na-mexico-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://iam.la-north-2.myhuaweicloud.com");
    public static CN_NORTH_9 = new Region("cn-north-9", "https://iam.cn-north-9.myhuaweicloud.com");
    

    private static STATIC_FIELDS = IamRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-2", IamRegion.CN_NORTH_2);
        map.set("cn-north-4", IamRegion.CN_NORTH_4);
        map.set("cn-north-1", IamRegion.CN_NORTH_1);
        map.set("cn-east-2", IamRegion.CN_EAST_2);
        map.set("cn-east-3", IamRegion.CN_EAST_3);
        map.set("cn-south-1", IamRegion.CN_SOUTH_1);
        map.set("cn-south-2", IamRegion.CN_SOUTH_2);
        map.set("cn-southwest-2", IamRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-1", IamRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-2", IamRegion.AP_SOUTHEAST_2);
        map.set("ap-southeast-3", IamRegion.AP_SOUTHEAST_3);
        map.set("af-south-1", IamRegion.AF_SOUTH_1);
        map.set("sa-brazil-1", IamRegion.SA_BRAZIL_1);
        map.set("la-south-2", IamRegion.LA_SOUTH_2);
        map.set("na-mexico-1", IamRegion.NA_MEXICO_1);
        map.set("la-north-2", IamRegion.LA_NORTH_2);
        map.set("cn-north-9", IamRegion.CN_NORTH_9);
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
