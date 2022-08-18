
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFunctionTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string | undefined;
    private 'trigger_type_code'?: CreateFunctionTriggerResponseTriggerTypeCodeEnum | undefined;
    private 'trigger_status'?: CreateFunctionTriggerResponseTriggerStatusEnum | undefined;
    private 'event_data'?: object | undefined;
    private 'last_updated_time'?: Date | undefined;
    private 'created_time'?: Date | undefined;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): CreateFunctionTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: CreateFunctionTriggerResponseTriggerTypeCodeEnum): CreateFunctionTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: CreateFunctionTriggerResponseTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: CreateFunctionTriggerResponseTriggerStatusEnum): CreateFunctionTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: CreateFunctionTriggerResponseTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
    public withEventData(eventData: object): CreateFunctionTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData() {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): CreateFunctionTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime() {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): CreateFunctionTriggerResponse {
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
    DISABLE = 'DISABLE'
}
