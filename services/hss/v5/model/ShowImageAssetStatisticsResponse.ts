
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageAssetStatisticsResponse extends SdkResponse {
    private 'local_num'?: number;
    private 'cicd_num'?: number;
    private 'registry_num'?: number;
    public constructor() { 
        super();
    }
    public withLocalNum(localNum: number): ShowImageAssetStatisticsResponse {
        this['local_num'] = localNum;
        return this;
    }
    public set localNum(localNum: number  | undefined) {
        this['local_num'] = localNum;
    }
    public get localNum(): number | undefined {
        return this['local_num'];
    }
    public withCicdNum(cicdNum: number): ShowImageAssetStatisticsResponse {
        this['cicd_num'] = cicdNum;
        return this;
    }
    public set cicdNum(cicdNum: number  | undefined) {
        this['cicd_num'] = cicdNum;
    }
    public get cicdNum(): number | undefined {
        return this['cicd_num'];
    }
    public withRegistryNum(registryNum: number): ShowImageAssetStatisticsResponse {
        this['registry_num'] = registryNum;
        return this;
    }
    public set registryNum(registryNum: number  | undefined) {
        this['registry_num'] = registryNum;
    }
    public get registryNum(): number | undefined {
        return this['registry_num'];
    }
}