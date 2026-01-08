import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SFSTurboRegion {
    public static EU_WEST_101 = new Region("eu-west-101", ["https://sfs-turbo.eu-west-101.myhuaweicloud.eu"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://sfs-turbo.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://sfs-turbo.cn-east-3.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://sfs-turbo.cn-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://sfs-turbo.cn-north-2.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://sfs-turbo.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://sfs-turbo.cn-north-9.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://sfs-turbo.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTH_2 = new Region("cn-south-2", ["https://sfs-turbo.cn-south-2.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://sfs-turbo.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://sfs-turbo.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://sfs-turbo.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sfs-turbo.ap-southeast-3.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://sfs-turbo.sa-brazil-1.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://sfs-turbo.la-south-2.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://sfs-turbo.la-north-2.myhuaweicloud.com"]);
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://sfs-turbo.af-south-1.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://sfs-turbo.na-mexico-1.myhuaweicloud.com"]);
    public static TR_WEST_1 = new Region("tr-west-1", ["https://sfs-turbo.tr-west-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://sfs-turbo.ap-southeast-4.myhuaweicloud.com"]);
    public static ME_EAST_1 = new Region("me-east-1", ["https://sfs-turbo.me-east-1.myhuaweicloud.com"]);
    public static CN_EAST_5 = new Region("cn-east-5", ["https://sfs-turbo.cn-east-5.myhuaweicloud.com"]);
    public static CN_SOUTH_4 = new Region("cn-south-4", ["https://sfs-turbo.cn-south-4.myhuaweicloud.com"]);
    public static RU_MOSCOW_1 = new Region("ru-moscow-1", ["https://sfs-turbo.ru-moscow-1.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://sfs-turbo.my-kualalumpur-1.myhuaweicloud.com"]);
    public static CN_EAST_4 = new Region("cn-east-4", ["https://sfs-turbo.cn-east-4.myhuaweicloud.com"]);
    public static AE_AD_1 = new Region("ae-ad-1", ["https://sfs-turbo.ae-ad-1.myhuaweicloud.com"]);
    public static CN_NORTH_11 = new Region("cn-north-11", ["https://sfs-turbo.cn-north-11.myhuaweicloud.com"]);
    public static AF_NORTH_1 = new Region("af-north-1", ["https://sfs-turbo.af-north-1.myhuaweicloud.com"]);
    public static CN_NORTH_12 = new Region("cn-north-12", ["https://sfs-turbo.cn-north-12.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_3 = new Region("cn-southwest-3", ["https://sfs-turbo.cn-southwest-3.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_5 = new Region("ap-southeast-5", ["https://sfs-turbo.ap-southeast-5.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "eu-west-101":SFSTurboRegion.EU_WEST_101,
        "cn-east-2":SFSTurboRegion.CN_EAST_2,
        "cn-east-3":SFSTurboRegion.CN_EAST_3,
        "cn-north-1":SFSTurboRegion.CN_NORTH_1,
        "cn-north-2":SFSTurboRegion.CN_NORTH_2,
        "cn-north-4":SFSTurboRegion.CN_NORTH_4,
        "cn-north-9":SFSTurboRegion.CN_NORTH_9,
        "cn-south-1":SFSTurboRegion.CN_SOUTH_1,
        "cn-south-2":SFSTurboRegion.CN_SOUTH_2,
        "cn-southwest-2":SFSTurboRegion.CN_SOUTHWEST_2,
        "ap-southeast-1":SFSTurboRegion.AP_SOUTHEAST_1,
        "ap-southeast-2":SFSTurboRegion.AP_SOUTHEAST_2,
        "ap-southeast-3":SFSTurboRegion.AP_SOUTHEAST_3,
        "sa-brazil-1":SFSTurboRegion.SA_BRAZIL_1,
        "la-south-2":SFSTurboRegion.LA_SOUTH_2,
        "la-north-2":SFSTurboRegion.LA_NORTH_2,
        "af-south-1":SFSTurboRegion.AF_SOUTH_1,
        "na-mexico-1":SFSTurboRegion.NA_MEXICO_1,
        "tr-west-1":SFSTurboRegion.TR_WEST_1,
        "ap-southeast-4":SFSTurboRegion.AP_SOUTHEAST_4,
        "me-east-1":SFSTurboRegion.ME_EAST_1,
        "cn-east-5":SFSTurboRegion.CN_EAST_5,
        "cn-south-4":SFSTurboRegion.CN_SOUTH_4,
        "ru-moscow-1":SFSTurboRegion.RU_MOSCOW_1,
        "my-kualalumpur-1":SFSTurboRegion.MY_KUALALUMPUR_1,
        "cn-east-4":SFSTurboRegion.CN_EAST_4,
        "ae-ad-1":SFSTurboRegion.AE_AD_1,
        "cn-north-11":SFSTurboRegion.CN_NORTH_11,
        "af-north-1":SFSTurboRegion.AF_NORTH_1,
        "cn-north-12":SFSTurboRegion.CN_NORTH_12,
        "cn-southwest-3":SFSTurboRegion.CN_SOUTHWEST_3,
        "ap-southeast-5":SFSTurboRegion.AP_SOUTHEAST_5
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
