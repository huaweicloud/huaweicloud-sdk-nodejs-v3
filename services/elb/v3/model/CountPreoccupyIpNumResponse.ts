import { PreoccupyIp } from './PreoccupyIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountPreoccupyIpNumResponse extends SdkResponse {
    private 'preoccupy_ip'?: PreoccupyIp;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPreoccupyIp(preoccupyIp: PreoccupyIp): CountPreoccupyIpNumResponse {
        this['preoccupy_ip'] = preoccupyIp;
        return this;
    }
    public set preoccupyIp(preoccupyIp: PreoccupyIp  | undefined) {
        this['preoccupy_ip'] = preoccupyIp;
    }
    public get preoccupyIp(): PreoccupyIp | undefined {
        return this['preoccupy_ip'];
    }
    public withRequestId(requestId: string): CountPreoccupyIpNumResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}