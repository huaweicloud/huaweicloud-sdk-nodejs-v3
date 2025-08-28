import { HostVaultInfo } from './HostVaultInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHostVaultsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostVaultInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulHostVaultsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostVaultInfo>): ListVulHostVaultsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostVaultInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostVaultInfo> | undefined {
        return this['data_list'];
    }
}