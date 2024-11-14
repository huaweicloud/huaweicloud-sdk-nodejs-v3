import { ObsTargetAttributes } from './ObsTargetAttributes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateObsTargetAttributesResponse extends SdkResponse {
    private 'target_id'?: string;
    public attributes?: ObsTargetAttributes;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTargetId(targetId: string): UpdateObsTargetAttributesResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withAttributes(attributes: ObsTargetAttributes): UpdateObsTargetAttributesResponse {
        this['attributes'] = attributes;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateObsTargetAttributesResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}