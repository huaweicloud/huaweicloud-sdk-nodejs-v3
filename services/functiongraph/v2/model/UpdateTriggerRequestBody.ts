import { TriggerEventData } from './TriggerEventData';


export class UpdateTriggerRequestBody {
    private 'trigger_status'?: UpdateTriggerRequestBodyTriggerStatusEnum | undefined;
    private 'event_data'?: Array<TriggerEventData> | undefined;
    public constructor() { 
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
    public withEventData(eventData: Array<TriggerEventData>): UpdateTriggerRequestBody {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: Array<TriggerEventData> | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData() {
        return this['event_data'];
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
