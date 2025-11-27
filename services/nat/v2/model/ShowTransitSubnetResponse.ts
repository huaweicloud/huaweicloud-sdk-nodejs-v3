import { TransitSubnet } from './TransitSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransitSubnetResponse extends SdkResponse {
    private 'transit_subnet'?: TransitSubnet;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTransitSubnet(transitSubnet: TransitSubnet): ShowTransitSubnetResponse {
        this['transit_subnet'] = transitSubnet;
        return this;
    }
    public set transitSubnet(transitSubnet: TransitSubnet  | undefined) {
        this['transit_subnet'] = transitSubnet;
    }
    public get transitSubnet(): TransitSubnet | undefined {
        return this['transit_subnet'];
    }
    public withRequestId(requestId: string): ShowTransitSubnetResponse {
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