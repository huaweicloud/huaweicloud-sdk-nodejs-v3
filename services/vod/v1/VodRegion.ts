import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class VodRegion {
    public static CN_EAST_2 = new Region("cn-east-2", "https://vod.cn-east-2.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://vod.cn-north-1.myhuaweicloud.com");
    public static CN_NORTH_4 = new Region("cn-north-4", "https://vod.cn-north-4.myhuaweicloud.com");
    

    private static STATIC_FIELDS = VodRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-east-2", VodRegion.CN_EAST_2);
        map.set("cn-north-1", VodRegion.CN_NORTH_1);
        map.set("cn-north-4", VodRegion.CN_NORTH_4);
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
