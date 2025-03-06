import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class GaussDBforNoSQLRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://gaussdb-nosql.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://gaussdb-nosql.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://gaussdb-nosql.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://gaussdb-nosql.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://gaussdb-nosql.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://gaussdb-nosql.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://gaussdb-nosql.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://gaussdb-nosql.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://gaussdb-nosql.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://gaussdb-nosql.ap-southeast-3.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://gaussdb-nosql.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://gaussdb-nosql.cn-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://gaussdb-nosql.cn-north-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://gaussdb-nosql.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://gaussdb-nosql.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://gaussdb-nosql.la-south-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://gaussdb-nosql.cn-north-9.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://gaussdb-nosql.eu-west-101.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":GaussDBforNoSQLRegion.AF_SOUTH_1,
        "cn-north-4":GaussDBforNoSQLRegion.CN_NORTH_4,
        "cn-north-1":GaussDBforNoSQLRegion.CN_NORTH_1,
        "cn-east-2":GaussDBforNoSQLRegion.CN_EAST_2,
        "cn-east-3":GaussDBforNoSQLRegion.CN_EAST_3,
        "cn-south-1":GaussDBforNoSQLRegion.CN_SOUTH_1,
        "cn-southwest-2":GaussDBforNoSQLRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":GaussDBforNoSQLRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":GaussDBforNoSQLRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":GaussDBforNoSQLRegion.AP_SOUTHEAST_3,
        "ru-northwest-2":GaussDBforNoSQLRegion.RU_NORTHWEST_2,
        "cn-south-2":GaussDBforNoSQLRegion.CN_SOUTH_2,
        "cn-north-2":GaussDBforNoSQLRegion.CN_NORTH_2,
        "la-north-2":GaussDBforNoSQLRegion.LA_NORTH_2,
        "sa-brazil-1":GaussDBforNoSQLRegion.SA_BRAZIL_1,
        "la-south-2":GaussDBforNoSQLRegion.LA_SOUTH_2,
        "cn-north-9":GaussDBforNoSQLRegion.CN_NORTH_9,
        "eu-west-101":GaussDBforNoSQLRegion.EU_WEST_101
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
