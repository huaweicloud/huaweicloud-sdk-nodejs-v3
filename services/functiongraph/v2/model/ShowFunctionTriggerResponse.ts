
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFunctionTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string;
    private 'trigger_type_code'?: ShowFunctionTriggerResponseTriggerTypeCodeEnum | string;
    private 'trigger_status'?: ShowFunctionTriggerResponseTriggerStatusEnum | string;
    private 'event_data'?: object;
    private 'last_updated_time'?: Date;
    private 'created_time'?: Date;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): ShowFunctionTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: ShowFunctionTriggerResponseTriggerTypeCodeEnum | string): ShowFunctionTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: ShowFunctionTriggerResponseTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): ShowFunctionTriggerResponseTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: ShowFunctionTriggerResponseTriggerStatusEnum | string): ShowFunctionTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: ShowFunctionTriggerResponseTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): ShowFunctionTriggerResponseTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventData(eventData: object): ShowFunctionTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): object | undefined {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): ShowFunctionTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date  | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime(): Date | undefined {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): ShowFunctionTriggerResponse {
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
export enum ShowFunctionTriggerResponseTriggerTypeCodeEnum {
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
export enum ShowFunctionTriggerResponseTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
