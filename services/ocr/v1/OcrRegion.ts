import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class OcrRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://ocr.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://ocr.cn-south-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://ocr.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://ocr.cn-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://ocr.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://ocr.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://ocr.ap-southeast-3.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://ocr.la-south-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://ocr.af-south-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://ocr.la-north-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":OcrRegion.CN_NORTH_4,
        "cn-south-1":OcrRegion.CN_SOUTH_1,
        "cn-east-3":OcrRegion.CN_EAST_3,
        "cn-north-1":OcrRegion.CN_NORTH_1,
        "ap-southeast-2":OcrRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":OcrRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":OcrRegion.AP_SOUTHEAST_3,
        "la-south-2":OcrRegion.LA_SOUTH_2,
        "af-south-1":OcrRegion.AF_SOUTH_1,
        "la-north-2":OcrRegion.LA_NORTH_2
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
