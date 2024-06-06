import { RecyclePolicy } from './RecyclePolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecyclePolicyResponse extends SdkResponse {
    private 'recycle_policy'?: RecyclePolicy;
    public constructor() { 
        super();
    }
    public withRecyclePolicy(recyclePolicy: RecyclePolicy): ShowRecyclePolicyResponse {
        this['recycle_policy'] = recyclePolicy;
        return this;
    }
    public set recyclePolicy(recyclePolicy: RecyclePolicy  | undefined) {
        this['recycle_policy'] = recyclePolicy;
    }
    public get recyclePolicy(): RecyclePolicy | undefined {
        return this['recycle_policy'];
    }
}