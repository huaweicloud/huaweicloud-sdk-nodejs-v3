import { TriggerEventDataRequestBody } from './TriggerEventDataRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFunctionTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string;
    private 'trigger_type_code'?: CreateFunctionTriggerResponseTriggerTypeCodeEnum | string;
    private 'trigger_status'?: CreateFunctionTriggerResponseTriggerStatusEnum | string;
    private 'event_data'?: TriggerEventDataRequestBody;
    private 'last_updated_time'?: Date;
    private 'created_time'?: Date;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): CreateFunctionTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: CreateFunctionTriggerResponseTriggerTypeCodeEnum | string): CreateFunctionTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: CreateFunctionTriggerResponseTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): CreateFunctionTriggerResponseTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: CreateFunctionTriggerResponseTriggerStatusEnum | string): CreateFunctionTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: CreateFunctionTriggerResponseTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): CreateFunctionTriggerResponseTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventData(eventData: TriggerEventDataRequestBody): CreateFunctionTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: TriggerEventDataRequestBody  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): TriggerEventDataRequestBody | undefined {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): CreateFunctionTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date  | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime(): Date | undefined {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): CreateFunctionTriggerResponse {
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
export enum CreateFunctionTriggerResponseTriggerTypeCodeEnum {
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
export enum CreateFunctionTriggerResponseTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
