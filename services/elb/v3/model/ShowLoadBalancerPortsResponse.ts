import { LocalPort } from './LocalPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadBalancerPortsResponse extends SdkResponse {
    public ports?: Array<LocalPort>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPorts(ports: Array<LocalPort>): ShowLoadBalancerPortsResponse {
        this['ports'] = ports;
        return this;
    }
    public withRequestId(requestId: string): ShowLoadBalancerPortsResponse {
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