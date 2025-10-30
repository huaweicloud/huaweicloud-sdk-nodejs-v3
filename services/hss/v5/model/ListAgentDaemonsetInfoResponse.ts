import { ClusterInfoResponse } from './ClusterInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentDaemonsetInfoResponse extends SdkResponse {
    private 'data_list'?: Array<ClusterInfoResponse>;
    private 'total_num'?: number;
    private 'upgradeful_num'?: number;
    private 'err_running_num'?: number;
    private 'err_access_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<ClusterInfoResponse>): ListAgentDaemonsetInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterInfoResponse>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterInfoResponse> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAgentDaemonsetInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withUpgradefulNum(upgradefulNum: number): ListAgentDaemonsetInfoResponse {
        this['upgradeful_num'] = upgradefulNum;
        return this;
    }
    public set upgradefulNum(upgradefulNum: number  | undefined) {
        this['upgradeful_num'] = upgradefulNum;
    }
    public get upgradefulNum(): number | undefined {
        return this['upgradeful_num'];
    }
    public withErrRunningNum(errRunningNum: number): ListAgentDaemonsetInfoResponse {
        this['err_running_num'] = errRunningNum;
        return this;
    }
    public set errRunningNum(errRunningNum: number  | undefined) {
        this['err_running_num'] = errRunningNum;
    }
    public get errRunningNum(): number | undefined {
        return this['err_running_num'];
    }
    public withErrAccessNum(errAccessNum: number): ListAgentDaemonsetInfoResponse {
        this['err_access_num'] = errAccessNum;
        return this;
    }
    public set errAccessNum(errAccessNum: number  | undefined) {
        this['err_access_num'] = errAccessNum;
    }
    public get errAccessNum(): number | undefined {
        return this['err_access_num'];
    }
}