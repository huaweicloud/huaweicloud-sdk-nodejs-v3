import { Propagation } from './Propagation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePropagationRoutePolicyResponse extends SdkResponse {
    public propagation?: Propagation;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPropagation(propagation: Propagation): UpdatePropagationRoutePolicyResponse {
        this['propagation'] = propagation;
        return this;
    }
    public withRequestId(requestId: string): UpdatePropagationRoutePolicyResponse {
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