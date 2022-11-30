

export class ListFunctionTriggerResult {
    private 'trigger_id': string | undefined;
    private 'trigger_type_code': ListFunctionTriggerResultTriggerTypeCodeEnum | undefined;
    private 'trigger_status': ListFunctionTriggerResultTriggerStatusEnum | undefined;
    private 'event_data': object | undefined;
    private 'last_updated_time': Date | undefined;
    private 'created_time': Date | undefined;
    public constructor(triggerId?: any, triggerTypeCode?: any, triggerStatus?: any, eventData?: any, lastUpdatedTime?: any, createdTime?: any) { 
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
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: ListFunctionTriggerResultTriggerTypeCodeEnum): ListFunctionTriggerResult {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: ListFunctionTriggerResultTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: ListFunctionTriggerResultTriggerStatusEnum): ListFunctionTriggerResult {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: ListFunctionTriggerResultTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
    public withEventData(eventData: object): ListFunctionTriggerResult {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData() {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): ListFunctionTriggerResult {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime() {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): ListFunctionTriggerResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
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
    DISABLE = 'DISABLE'
}
