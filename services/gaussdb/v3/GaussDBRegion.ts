import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class GaussDBRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://gaussdb.cn-north-4.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://gaussdb.cn-southwest-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://gaussdb.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://gaussdb.cn-south-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://gaussdb.ru-northwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://gaussdb.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://gaussdb.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://gaussdb.cn-north-9.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://gaussdbformysql.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://gaussdb.ap-southeast-4.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://gaussdb.sa-brazil-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://gaussdbformysql.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://gaussdbformysql.ap-southeast-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://gaussdb-mysql.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://gaussdb.cn-south-4.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://gaussdbformysql.cn-north-11.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://gaussdb-mysql.cn-east-5.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://gaussdb-mysql.la-north-2.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://gaussdbformysql.me-east-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":GaussDBRegion.CN_NORTH_4,
        "cn-southwest-2":GaussDBRegion.CN_SOUTHWEST_2,
        "cn-east-3":GaussDBRegion.CN_EAST_3,
        "cn-south-1":GaussDBRegion.CN_SOUTH_1,
        "ru-northwest-2":GaussDBRegion.RU_NORTHWEST_2,
        "ap-southeast-3":GaussDBRegion.AP_SOUTHEAST_3,
        "cn-north-2":GaussDBRegion.CN_NORTH_2,
        "cn-north-9":GaussDBRegion.CN_NORTH_9,
        "tr-west-1":GaussDBRegion.TR_WEST_1,
        "ap-southeast-4":GaussDBRegion.AP_SOUTHEAST_4,
        "sa-brazil-1":GaussDBRegion.SA_BRAZIL_1,
        "ap-southeast-1":GaussDBRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":GaussDBRegion.AP_SOUTHEAST_2,
        "af-south-1":GaussDBRegion.AF_SOUTH_1,
        "cn-south-4":GaussDBRegion.CN_SOUTH_4,
        "cn-north-11":GaussDBRegion.CN_NORTH_11,
        "cn-east-5":GaussDBRegion.CN_EAST_5,
        "la-north-2":GaussDBRegion.LA_NORTH_2,
        "me-east-1":GaussDBRegion.ME_EAST_1
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
