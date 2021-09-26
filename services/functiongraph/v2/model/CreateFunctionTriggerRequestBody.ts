

export class CreateFunctionTriggerRequestBody {
    private 'trigger_type_code': CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | undefined;
    private 'trigger_status'?: CreateFunctionTriggerRequestBodyTriggerStatusEnum | undefined;
    private 'event_type_code'?: string | undefined;
    private 'event_data': object | undefined;
    public constructor(triggerTypeCode?: any, eventData?: any) { 
        this['trigger_type_code'] = triggerTypeCode;
        this['event_data'] = eventData;
    }
    public withTriggerTypeCode(triggerTypeCode: CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum): CreateFunctionTriggerRequestBody {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: CreateFunctionTriggerRequestBodyTriggerStatusEnum): CreateFunctionTriggerRequestBody {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: CreateFunctionTriggerRequestBodyTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
    public withEventTypeCode(eventTypeCode: string): CreateFunctionTriggerRequestBody {
        this['event_type_code'] = eventTypeCode;
        return this;
    }
    public set eventTypeCode(eventTypeCode: string | undefined) {
        this['event_type_code'] = eventTypeCode;
    }
    public get eventTypeCode() {
        return this['event_type_code'];
    }
    public withEventData(eventData: object): CreateFunctionTriggerRequestBody {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object | undefined) {
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
export enum CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum {
    TIMER = 'TIMER',
    APIG = 'APIG',
    CTS = 'CTS',
    DDS = 'DDS',
    DMS = 'DMS',
    DIS = 'DIS',
    LTS = 'LTS',
    OBS = 'OBS',
    KAFKA = 'KAFKA'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionTriggerRequestBodyTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
