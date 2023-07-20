

export class BaseEndpointConfig {
    private 'is_target_readonly'?: boolean;
    public constructor() { 
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): BaseEndpointConfig {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean  | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly(): boolean | undefined {
        return this['is_target_readonly'];
    }
}