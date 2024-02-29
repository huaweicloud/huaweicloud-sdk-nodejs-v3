import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class IamRegion {
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://iam.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://iam.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://iam.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://iam.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://iam.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://iam.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://iam.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://iam.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://iam.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://iam.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://iam.ap-southeast-3.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://iam.af-south-1.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://iam.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://iam.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://iam.na-mexico-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://iam.la-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://iam.cn-north-9.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://iam.eu-west-101.myhuaweicloud.eu"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://iam.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://iam.my-kualalumpur-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-2":IamRegion.CN_NORTH_2,
        "cn-north-4":IamRegion.CN_NORTH_4,
        "cn-north-1":IamRegion.CN_NORTH_1,
        "cn-east-2":IamRegion.CN_EAST_2,
        "cn-east-3":IamRegion.CN_EAST_3,
        "cn-south-1":IamRegion.CN_SOUTH_1,
        "cn-south-2":IamRegion.CN_SOUTH_2,
        "cn-southwest-2":IamRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":IamRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":IamRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":IamRegion.AP_SOUTHEAST_3,
        "af-south-1":IamRegion.AF_SOUTH_1,
        "sa-brazil-1":IamRegion.SA_BRAZIL_1,
        "la-south-2":IamRegion.LA_SOUTH_2,
        "na-mexico-1":IamRegion.NA_MEXICO_1,
        "la-north-2":IamRegion.LA_NORTH_2,
        "cn-north-9":IamRegion.CN_NORTH_9,
        "eu-west-101":IamRegion.EU_WEST_101,
        "eu-west-0":IamRegion.EU_WEST_0,
        "my-kualalumpur-1":IamRegion.MY_KUALALUMPUR_1
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
