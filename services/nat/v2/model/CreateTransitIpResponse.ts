import { TransitIp } from './TransitIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTransitIpResponse extends SdkResponse {
    private 'transit_ip'?: TransitIp;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTransitIp(transitIp: TransitIp): CreateTransitIpResponse {
        this['transit_ip'] = transitIp;
        return this;
    }
    public set transitIp(transitIp: TransitIp  | undefined) {
        this['transit_ip'] = transitIp;
    }
    public get transitIp(): TransitIp | undefined {
        return this['transit_ip'];
    }
    public withRequestId(requestId: string): CreateTransitIpResponse {
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