import { TransitIp } from './TransitIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransitIpResponse extends SdkResponse {
    private 'transit_ip'?: TransitIp;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTransitIp(transitIp: TransitIp): ShowTransitIpResponse {
        this['transit_ip'] = transitIp;
        return this;
    }
    public set transitIp(transitIp: TransitIp  | undefined) {
        this['transit_ip'] = transitIp;
    }
    public get transitIp(): TransitIp | undefined {
        return this['transit_ip'];
    }
    public withRequestId(requestId: string): ShowTransitIpResponse {
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