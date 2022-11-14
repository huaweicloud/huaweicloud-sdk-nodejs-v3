import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class VpcepRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://vpcep.cn-north-4.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://vpcep.cn-north-1.myhuaweicloud.com");
    public static CN_EAST_2 = new Region("cn-east-2", "https://vpcep.cn-east-2.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://vpcep.cn-east-3.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://vpcep.cn-south-1.myhuaweicloud.com");
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", "https://vpcep.cn-southwest-2.myhuaweicloud.com");
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", "https://vpc.ap-southeast-1.myhuaweicloud.com");
    public static LA_SOUTH_2 = new Region("la-south-2", "https://vpc.la-south-2.myhuaweicloud.com");
    public static NA_MEXICO_1 = new Region("na-mexico-1", "https://vpc.na-mexico-1.myhuaweicloud.com");
    

    private static STATIC_FIELDS = VpcepRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", VpcepRegion.CN_NORTH_4);
        map.set("cn-north-1", VpcepRegion.CN_NORTH_1);
        map.set("cn-east-2", VpcepRegion.CN_EAST_2);
        map.set("cn-east-3", VpcepRegion.CN_EAST_3);
        map.set("cn-south-1", VpcepRegion.CN_SOUTH_1);
        map.set("cn-southwest-2", VpcepRegion.CN_SOUTHWEST_2);
        map.set("ap-southeast-1", VpcepRegion.AP_SOUTHEAST_1);
        map.set("la-south-2", VpcepRegion.LA_SOUTH_2);
        map.set("na-mexico-1", VpcepRegion.NA_MEXICO_1);
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
