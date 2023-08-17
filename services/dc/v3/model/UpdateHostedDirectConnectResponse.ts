import { HostedDirectConnect } from './HostedDirectConnect';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostedDirectConnectResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'hosted_connect'?: HostedDirectConnect;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateHostedDirectConnectResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHostedConnect(hostedConnect: HostedDirectConnect): UpdateHostedDirectConnectResponse {
        this['hosted_connect'] = hostedConnect;
        return this;
    }
    public set hostedConnect(hostedConnect: HostedDirectConnect  | undefined) {
        this['hosted_connect'] = hostedConnect;
    }
    public get hostedConnect(): HostedDirectConnect | undefined {
        return this['hosted_connect'];
    }
}