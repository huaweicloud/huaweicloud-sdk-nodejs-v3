
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string | undefined;
    private 'trigger_type_code'?: UpdateTriggerResponseTriggerTypeCodeEnum | undefined;
    private 'trigger_status'?: UpdateTriggerResponseTriggerStatusEnum | undefined;
    private 'event_data'?: object | undefined;
    private 'last_updated_time'?: Date | undefined;
    private 'created_time'?: Date | undefined;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): UpdateTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: UpdateTriggerResponseTriggerTypeCodeEnum): UpdateTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: UpdateTriggerResponseTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: UpdateTriggerResponseTriggerStatusEnum): UpdateTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: UpdateTriggerResponseTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
    public withEventData(eventData: object): UpdateTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData() {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): UpdateTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime() {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): UpdateTriggerResponse {
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
