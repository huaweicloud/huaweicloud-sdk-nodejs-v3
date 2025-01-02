import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class GaussDBforopenGaussRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://gaussdb-opengauss.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://gaussdb-opengauss.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://gaussdb-opengauss.cn-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://gaussdb-opengauss.ru-northwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://gaussdb-opengauss.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://gaussdb-opengauss.cn-north-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://gaussdb-opengauss.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://gaussdb-opengauss.ap-southeast-1.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://gaussdb-opengauss.cn-east-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://gaussdb-opengauss.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://gaussdb-opengauss.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://gaussdb-opengauss.la-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://gaussdb-opengauss.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://gaussdb-opengauss.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://gaussdb-opengauss.cn-south-2.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://gaussdb.cn-east-4.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://gaussdb.cn-east-5.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://gaussdb.ap-southeast-5.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://gaussdb.tr-west-1.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://gaussdb.me-east-1.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://gaussdb.af-north-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://gaussdb-opengauss.ap-southeast-4.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://gaussdb.cn-east-2.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":GaussDBforopenGaussRegion.CN_NORTH_4,
        "cn-southwest-2":GaussDBforopenGaussRegion.CN_SOUTHWEST_2,
        "cn-south-1":GaussDBforopenGaussRegion.CN_SOUTH_1,
        "ru-northwest-2":GaussDBforopenGaussRegion.RU_NORTHWEST_2,
        "ap-southeast-3":GaussDBforopenGaussRegion.AP_SOUTHEAST_3,
        "cn-north-2":GaussDBforopenGaussRegion.CN_NORTH_2,
        "ap-southeast-2":GaussDBforopenGaussRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":GaussDBforopenGaussRegion.AP_SOUTHEAST_1,
        "cn-east-3":GaussDBforopenGaussRegion.CN_EAST_3,
        "sa-brazil-1":GaussDBforopenGaussRegion.SA_BRAZIL_1,
        "la-south-2":GaussDBforopenGaussRegion.LA_SOUTH_2,
        "la-north-2":GaussDBforopenGaussRegion.LA_NORTH_2,
        "af-south-1":GaussDBforopenGaussRegion.AF_SOUTH_1,
        "cn-north-9":GaussDBforopenGaussRegion.CN_NORTH_9,
        "cn-south-2":GaussDBforopenGaussRegion.CN_SOUTH_2,
        "cn-east-4":GaussDBforopenGaussRegion.CN_EAST_4,
        "cn-east-5":GaussDBforopenGaussRegion.CN_EAST_5,
        "ap-southeast-5":GaussDBforopenGaussRegion.AP_SOUTHEAST_5,
        "tr-west-1":GaussDBforopenGaussRegion.TR_WEST_1,
        "me-east-1":GaussDBforopenGaussRegion.ME_EAST_1,
        "af-north-1":GaussDBforopenGaussRegion.AF_NORTH_1,
        "ap-southeast-4":GaussDBforopenGaussRegion.AP_SOUTHEAST_4,
        "cn-east-2":GaussDBforopenGaussRegion.CN_EAST_2
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
