

export class DeleteScalingGroupRequest {
    private 'scaling_group_id'?: string;
    private 'force_delete'?: DeleteScalingGroupRequestForceDeleteEnum | string;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): DeleteScalingGroupRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withForceDelete(forceDelete: DeleteScalingGroupRequestForceDeleteEnum | string): DeleteScalingGroupRequest {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: DeleteScalingGroupRequestForceDeleteEnum | string  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): DeleteScalingGroupRequestForceDeleteEnum | string | undefined {
        return this['force_delete'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteScalingGroupRequestForceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
