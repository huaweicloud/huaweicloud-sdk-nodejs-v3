import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class VpcepRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://vpcep.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://vpcep.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://vpcep.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://vpcep.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://vpcep.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://vpcep.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://vpcep.ap-southeast-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://vpcep.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://vpcep.na-mexico-1.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://vpcep.cn-north-9.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://vpcep.ap-southeast-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://vpcep.ap-southeast-2.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://vpcep.cn-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://vpcep.af-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://vpcep.cn-south-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://vpcep.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://vpcep.la-north-2.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://vpcep.tr-west-1.myhuaweicloud.com"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://vpcep.eu-west-101.myhuaweicloud.eu"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://vpcep.ap-southeast-4.myhuaweicloud.com"]);
    public static EU_WEST_0 = new Region("eu-west-0", ["https://vpcep.eu-west-0.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://vpcep.my-kualalumpur-1.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://vpcep.ae-ad-1.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://vpcep.ru-moscow-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://vpcep.cn-east-5.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://vpcep.cn-south-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://vpcep.me-east-1.myhuaweicloud.com"]);
    public static RU_NORTHWEST_2 = new Region("ru-northwest-2", ["https://vpcep.ru-northwest-2.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://vpcep.cn-north-11.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://vpcep.cn-east-4.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://vpcep.af-north-1.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":VpcepRegion.CN_NORTH_4,
        "cn-north-1":VpcepRegion.CN_NORTH_1,
        "cn-east-2":VpcepRegion.CN_EAST_2,
        "cn-east-3":VpcepRegion.CN_EAST_3,
        "cn-south-1":VpcepRegion.CN_SOUTH_1,
        "cn-southwest-2":VpcepRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":VpcepRegion.AP_SOUTHEAST_1,
        "la-south-2":VpcepRegion.LA_SOUTH_2,
        "na-mexico-1":VpcepRegion.NA_MEXICO_1,
        "cn-north-9":VpcepRegion.CN_NORTH_9,
        "ap-southeast-3":VpcepRegion.AP_SOUTHEAST_3,
        "ap-southeast-2":VpcepRegion.AP_SOUTHEAST_2,
        "cn-north-2":VpcepRegion.CN_NORTH_2,
        "af-south-1":VpcepRegion.AF_SOUTH_1,
        "cn-south-2":VpcepRegion.CN_SOUTH_2,
        "sa-brazil-1":VpcepRegion.SA_BRAZIL_1,
        "la-north-2":VpcepRegion.LA_NORTH_2,
        "tr-west-1":VpcepRegion.TR_WEST_1,
        "eu-west-101":VpcepRegion.EU_WEST_101,
        "ap-southeast-4":VpcepRegion.AP_SOUTHEAST_4,
        "eu-west-0":VpcepRegion.EU_WEST_0,
        "my-kualalumpur-1":VpcepRegion.MY_KUALALUMPUR_1,
        "ae-ad-1":VpcepRegion.AE_AD_1,
        "ru-moscow-1":VpcepRegion.RU_MOSCOW_1,
        "cn-east-5":VpcepRegion.CN_EAST_5,
        "cn-south-4":VpcepRegion.CN_SOUTH_4,
        "me-east-1":VpcepRegion.ME_EAST_1,
        "ru-northwest-2":VpcepRegion.RU_NORTHWEST_2,
        "cn-north-11":VpcepRegion.CN_NORTH_11,
        "cn-east-4":VpcepRegion.CN_EAST_4,
        "af-north-1":VpcepRegion.AF_NORTH_1
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
