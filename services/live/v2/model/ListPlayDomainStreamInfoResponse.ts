import { PlayDomainStreamInfo } from './PlayDomainStreamInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlayDomainStreamInfoResponse extends SdkResponse {
    public time?: string;
    private 'data_list'?: Array<PlayDomainStreamInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTime(time: string): ListPlayDomainStreamInfoResponse {
        this['time'] = time;
        return this;
    }
    public withDataList(dataList: Array<PlayDomainStreamInfo>): ListPlayDomainStreamInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PlayDomainStreamInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PlayDomainStreamInfo> | undefined {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListPlayDomainStreamInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}