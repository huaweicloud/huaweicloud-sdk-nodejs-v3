import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class CsmsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://kms.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://kms.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_2 = new Region("cn-north-2", "https://kms.cn-north-2.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://kms.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://kms.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://kms.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://kms.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://kms.ap-southeast-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", "https://kms.ap-southeast-3.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://kms.la-south-2.myhuaweicloud.com");
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", "https://kms.sa-brazil-1.myhuaweicloud.com");
    public static LA_NORTH_2 = new Region("la-north-2", "https://kms.la-north-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://kms.ap-southeast-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = CsmsRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", CsmsRegion.CN_NORTH_4);
        map.set("cn-north-1", CsmsRegion.CN_NORTH_1);
        map.set("cn-north-2", CsmsRegion.CN_NORTH_2);
        map.set("cn-east-2", CsmsRegion.CN_EAST_2);
        map.set("cn-east-3", CsmsRegion.CN_EAST_3);
        map.set("cn-south-1", CsmsRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", CsmsRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-1", CsmsRegion.AP_SOUTHEAST_1);
        map.set("ap-southeast-3", CsmsRegion.AP_SOUTHEAST_3);
        map.set("la-south-2", CsmsRegion.LA_SOUTH_2);
        map.set("sa-brazil-1", CsmsRegion.SA_BRAZIL_1);
        map.set("la-north-2", CsmsRegion.LA_NORTH_2);
        map.set("ap-southeast-2", CsmsRegion.AP_SOUTHEAST_2);
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
