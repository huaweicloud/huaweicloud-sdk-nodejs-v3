
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFunctionTriggerResponse extends SdkResponse {
    private 'trigger_id'?: string | undefined;
    private 'trigger_type_code'?: ShowFunctionTriggerResponseTriggerTypeCodeEnum | undefined;
    private 'trigger_status'?: ShowFunctionTriggerResponseTriggerStatusEnum | undefined;
    private 'event_data'?: object | undefined;
    private 'last_updated_time'?: Date | undefined;
    private 'created_time'?: Date | undefined;
    public constructor() { 
        super();
    }
    public withTriggerId(triggerId: string): ShowFunctionTriggerResponse {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
    public withTriggerTypeCode(triggerTypeCode: ShowFunctionTriggerResponseTriggerTypeCodeEnum): ShowFunctionTriggerResponse {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: ShowFunctionTriggerResponseTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerStatus(triggerStatus: ShowFunctionTriggerResponseTriggerStatusEnum): ShowFunctionTriggerResponse {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: ShowFunctionTriggerResponseTriggerStatusEnum | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus() {
        return this['trigger_status'];
    }
    public withEventData(eventData: object): ShowFunctionTriggerResponse {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: object | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData() {
        return this['event_data'];
    }
    public withLastUpdatedTime(lastUpdatedTime: Date): ShowFunctionTriggerResponse {
        this['last_updated_time'] = lastUpdatedTime;
        return this;
    }
    public set lastUpdatedTime(lastUpdatedTime: Date | undefined) {
        this['last_updated_time'] = lastUpdatedTime;
    }
    public get lastUpdatedTime() {
        return this['last_updated_time'];
    }
    public withCreatedTime(createdTime: Date): ShowFunctionTriggerResponse {
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
    KAFKA = 'KAFKA'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFunctionTriggerResponseTriggerStatusEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
