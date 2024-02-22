import { TriggerEventDataResponseBody } from './TriggerEventDataResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string;
    private 'trigger_type_code'?: UpdateTriggerResponseTriggerTypeCodeEnum | string;
    private 'trigger_status'?: UpdateTriggerResponseTriggerStatusEnum | string;
    private 'event_data'?: TriggerEventDataResponseBody;
    private 'last_updated_time'?: Date;
    private 'created_time'?: Date;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): UpdateTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: UpdateTriggerResponseTriggerTypeCodeEnum | string): UpdateTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: UpdateTriggerResponseTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): UpdateTriggerResponseTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: UpdateTriggerResponseTriggerStatusEnum | string): UpdateTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: UpdateTriggerResponseTriggerStatusEnum | string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): UpdateTriggerResponseTriggerStatusEnum | string | undefined {
        return this['trigger_status'];
    }
    public withEventData(eventData: TriggerEventDataResponseBody): UpdateTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: TriggerEventDataResponseBody  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): TriggerEventDataResponseBody | undefined {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): UpdateTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date  | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime(): Date | undefined {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): UpdateTriggerResponse {
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
export enum UpdateTriggerResponseTriggerTypeCodeEnum {
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
export enum UpdateTriggerResponseTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
