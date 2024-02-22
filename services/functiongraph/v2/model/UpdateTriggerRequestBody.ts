import { UpdateriggerEventData } from './UpdateriggerEventData';


export class UpdateTriggerRequestBody {
    private 'trigger_status'?: UpdateTriggerRequestBodyTriggerStatusEnum | string;
    private 'event_data'?: Array<UpdateriggerEventData>;
    public constructor() { 
    }
    public withTriggerStatus(triggerStatus: UpdateTriggerRequestBodyTriggerStatusEnum | string): UpdateTriggerRequestBody {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: UpdateTriggerRequestBodyTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): UpdateTriggerRequestBodyTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventData(eventData: Array<UpdateriggerEventData>): UpdateTriggerRequestBody {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: Array<UpdateriggerEventData>  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): Array<UpdateriggerEventData> | undefined {
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
