

export class CreateFunctionTriggerRequestBody {
    private 'trigger_type_code'?: CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | string;
    private 'trigger_status'?: CreateFunctionTriggerRequestBodyTriggerStatusEnum | string;
    private 'event_type_code'?: string;
    private 'event_data'?: object;
    public constructor(triggerTypeCode?: string, eventData?: object) { 
        this['trigger_type_code'] = triggerTypeCode;
        this['event_data'] = eventData;
    }
    public withTriggerTypeCode(triggerTypeCode: CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | string): CreateFunctionTriggerRequestBody {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): CreateFunctionTriggerRequestBodyTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: CreateFunctionTriggerRequestBodyTriggerStatusEnum | string): CreateFunctionTriggerRequestBody {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: CreateFunctionTriggerRequestBodyTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): CreateFunctionTriggerRequestBodyTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventTypeCode(eventTypeCode: string): CreateFunctionTriggerRequestBody {
        this['event_type_code'] = eventTypeCode;
        return this;
    }
    public set eventTypeCode(eventTypeCode: string  | undefined) {
        this['event_type_code'] = eventTypeCode;
    }
    public get eventTypeCode(): string | undefined {
        return this['event_type_code'];
    }
    public withEventData(eventData: object): CreateFunctionTriggerRequestBody {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): object | undefined {
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
    SMN = 'SMN',
    KAFKA = 'KAFKA',
    RABBITMQ = 'RABBITMQ',
    DEDICATEDGATEWAY = 'DEDICATEDGATEWAY',
    OPENSOURCEKAFKA = 'OPENSOURCEKAFKA',
    APIC = 'APIC',
    GAUSSMONGO = 'GAUSSMONGO',
    EVENTGRID = 'EVENTGRID'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionTriggerRequestBodyTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
