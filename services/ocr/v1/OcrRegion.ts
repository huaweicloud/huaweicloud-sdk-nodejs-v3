import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class OcrRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", "https://ocr.cn-north-4.myhuaweicloud.com");
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://ocr.cn-south-1.myhuaweicloud.com");
    public static CN_EAST_3 = new Region("cn-east-3", "https://ocr.cn-east-3.myhuaweicloud.com");
    public static CN_NORTH_1 = new Region("cn-north-1", "https://ocr.cn-north-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://ocr.ap-southeast-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = OcrRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-north-4", OcrRegion.CN_NORTH_4);
        map.set("cn-south-1", OcrRegion.CN_SOUTH_1);
        map.set("cn-east-3", OcrRegion.CN_EAST_3);
        map.set("cn-north-1", OcrRegion.CN_NORTH_1);
        map.set("ap-southeast-2", OcrRegion.AP_SOUTHEAST_2);
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
