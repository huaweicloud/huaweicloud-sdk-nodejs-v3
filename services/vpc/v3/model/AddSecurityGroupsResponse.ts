import { Port } from './Port';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSecurityGroupsResponse extends SdkResponse {
    private 'request_id'?: string;
    public port?: Port;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): AddSecurityGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPort(port: Port): AddSecurityGroupsResponse {
        this['port'] = port;
        return this;
    }
}