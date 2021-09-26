

export class UpdateTriggerRequestBody {
    private 'trigger_status': UpdateTriggerRequestBodyTriggerStatusEnum | undefined;
    public constructor(triggerStatus?: any) { 
        this['trigger_status'] = triggerStatus;
    }
    public withTriggerStatus(triggerStatus: UpdateTriggerRequestBodyTriggerStatusEnum): UpdateTriggerRequestBody {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: UpdateTriggerRequestBodyTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTriggerRequestBodyTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
