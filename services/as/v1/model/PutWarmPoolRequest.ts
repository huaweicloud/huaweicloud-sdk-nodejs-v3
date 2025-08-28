import { PutWarmPoolOption } from './PutWarmPoolOption';


export class PutWarmPoolRequest {
    private 'scaling_group_id'?: string;
    public body?: PutWarmPoolOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): PutWarmPoolRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: PutWarmPoolOption): PutWarmPoolRequest {
        this['body'] = body;
        return this;
    }
}