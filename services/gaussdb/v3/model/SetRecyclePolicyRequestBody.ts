import { RecyclePolicy } from './RecyclePolicy';


export class SetRecyclePolicyRequestBody {
    private 'recycle_policy'?: RecyclePolicy;
    public constructor() { 
    }
    public withRecyclePolicy(recyclePolicy: RecyclePolicy): SetRecyclePolicyRequestBody {
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