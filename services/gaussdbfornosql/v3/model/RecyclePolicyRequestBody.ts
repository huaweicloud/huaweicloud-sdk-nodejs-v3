import { RecyclePolicy } from './RecyclePolicy';


export class RecyclePolicyRequestBody {
    private 'recycle_policy'?: RecyclePolicy;
    public constructor(recyclePolicy?: RecyclePolicy) { 
        this['recycle_policy'] = recyclePolicy;
    }
    public withRecyclePolicy(recyclePolicy: RecyclePolicy): RecyclePolicyRequestBody {
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