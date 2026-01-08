import { Port } from './Port';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPortResponse extends SdkResponse {
    public port?: Port;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPort(port: Port): ShowPortResponse {
        this['port'] = port;
        return this;
    }
    public withRequestId(requestId: string): ShowPortResponse {
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