import { OriginRangeBody } from './OriginRangeBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRangeSwitchResponse extends SdkResponse {
    private 'origin_range'?: OriginRangeBody;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOriginRange(originRange: OriginRangeBody): UpdateRangeSwitchResponse {
        this['origin_range'] = originRange;
        return this;
    }
    public set originRange(originRange: OriginRangeBody  | undefined) {
        this['origin_range'] = originRange;
    }
    public get originRange(): OriginRangeBody | undefined {
        return this['origin_range'];
    }
    public withXRequestId(xRequestId: string): UpdateRangeSwitchResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}