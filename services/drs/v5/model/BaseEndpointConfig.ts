

export class BaseEndpointConfig {
    private 'is_target_readonly'?: boolean | undefined;
    public constructor() { 
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): BaseEndpointConfig {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly() {
        return this['is_target_readonly'];
    }
}