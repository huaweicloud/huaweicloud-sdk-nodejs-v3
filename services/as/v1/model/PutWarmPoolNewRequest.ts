import { PutWarmPoolOption } from './PutWarmPoolOption';


export class PutWarmPoolNewRequest {
    private 'scaling_group_id'?: string;
    public body?: PutWarmPoolOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): PutWarmPoolNewRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: PutWarmPoolOption): PutWarmPoolNewRequest {
        this['body'] = body;
        return this;
    }
}