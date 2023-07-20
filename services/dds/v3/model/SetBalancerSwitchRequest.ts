

export class SetBalancerSwitchRequest {
    private 'instance_id'?: string;
    public action?: SetBalancerSwitchRequestActionEnum | string;
    public constructor(instanceId?: string, action?: string) { 
        this['instance_id'] = instanceId;
        this['action'] = action;
    }
    public withInstanceId(instanceId: string): SetBalancerSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAction(action: SetBalancerSwitchRequestActionEnum | string): SetBalancerSwitchRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetBalancerSwitchRequestActionEnum {
    START = 'start',
    STOP = 'stop'
}
