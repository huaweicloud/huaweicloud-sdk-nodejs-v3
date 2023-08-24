import { HostProtectHistoryResponseInfo } from './HostProtectHistoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostProtectHistoryInfoResponse extends SdkResponse {
    private 'host_name'?: string;
    private 'protect_status'?: string;
    private 'total_num'?: number;
    private 'data_list'?: Array<HostProtectHistoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withHostName(hostName: string): ListHostProtectHistoryInfoResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withProtectStatus(protectStatus: string): ListHostProtectHistoryInfoResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withTotalNum(totalNum: number): ListHostProtectHistoryInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostProtectHistoryResponseInfo>): ListHostProtectHistoryInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostProtectHistoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostProtectHistoryResponseInfo> | undefined {
        return this['data_list'];
    }
}