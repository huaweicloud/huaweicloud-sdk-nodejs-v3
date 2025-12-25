import { VifExtendAttribute } from './VifExtendAttribute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateExtendAttributeResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'extend_attribute'?: VifExtendAttribute;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateExtendAttributeResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withExtendAttribute(extendAttribute: VifExtendAttribute): UpdateExtendAttributeResponse {
        this['extend_attribute'] = extendAttribute;
        return this;
    }
    public set extendAttribute(extendAttribute: VifExtendAttribute  | undefined) {
        this['extend_attribute'] = extendAttribute;
    }
    public get extendAttribute(): VifExtendAttribute | undefined {
        return this['extend_attribute'];
    }
}