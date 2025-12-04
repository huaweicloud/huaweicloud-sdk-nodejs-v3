import { ConnectErrorInfo } from './ConnectErrorInfo';
import { ConnectInfo } from './ConnectInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowPhoneConnectInfosResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'connect_infos'?: Array<ConnectInfo>;
    public errors?: Array<ConnectErrorInfo>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchShowPhoneConnectInfosResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withConnectInfos(connectInfos: Array<ConnectInfo>): BatchShowPhoneConnectInfosResponse {
        this['connect_infos'] = connectInfos;
        return this;
    }
    public set connectInfos(connectInfos: Array<ConnectInfo>  | undefined) {
        this['connect_infos'] = connectInfos;
    }
    public get connectInfos(): Array<ConnectInfo> | undefined {
        return this['connect_infos'];
    }
    public withErrors(errors: Array<ConnectErrorInfo>): BatchShowPhoneConnectInfosResponse {
        this['errors'] = errors;
        return this;
    }
}