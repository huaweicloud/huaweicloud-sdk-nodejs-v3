import { TriggerEventDataResponseBody } from './TriggerEventDataResponseBody';


export class ListFunctionTriggerResult {
    private 'trigger_id'?: string;
    private 'trigger_type_code'?: ListFunctionTriggerResultTriggerTypeCodeEnum | string;
    private 'trigger_status'?: ListFunctionTriggerResultTriggerStatusEnum | string;
    private 'event_data'?: TriggerEventDataResponseBody;
    private 'last_updated_time'?: Date;
    private 'created_time'?: Date;
    public constructor(triggerId?: string, triggerTypeCode?: string, triggerStatus?: string, eventData?: TriggerEventDataResponseBody, lastUpdatedTime?: Date, createdTime?: Date) { 
        this['trigger_id'] = triggerId;
        this['trigger_type_code'] = triggerTypeCode;
        this['trigger_status'] = triggerStatus;
        this['event_data'] = eventData;
        this['last_updated_time'] = lastUpdatedTime;
        this['created_time'] = createdTime;
    }
    public withTriggerId(triggerId: string): ListFunctionTriggerResult {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: ListFunctionTriggerResultTriggerTypeCodeEnum | string): ListFunctionTriggerResult {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: ListFunctionTriggerResultTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): ListFunctionTriggerResultTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: ListFunctionTriggerResultTriggerStatusEnum | string): ListFunctionTriggerResult {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: ListFunctionTriggerResultTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): ListFunctionTriggerResultTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventData(eventData: TriggerEventDataResponseBody): ListFunctionTriggerResult {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: TriggerEventDataResponseBody  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): TriggerEventDataResponseBody | undefined {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): ListFunctionTriggerResult {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date  | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime(): Date | undefined {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): ListFunctionTriggerResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionTriggerResultTriggerTypeCodeEnum {
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
export enum ListFunctionTriggerResultTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
