import { DirectConnect } from './DirectConnect';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDirectConnectResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'direct_connect'?: DirectConnect;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowDirectConnectResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withDirectConnect(directConnect: DirectConnect): ShowDirectConnectResponse {
        this['direct_connect'] = directConnect;
        return this;
    }
    public set directConnect(directConnect: DirectConnect  | undefined) {
        this['direct_connect'] = directConnect;
    }
    public get directConnect(): DirectConnect | undefined {
        return this['direct_connect'];
    }
}