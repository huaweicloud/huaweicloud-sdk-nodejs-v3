import { SlaRecord } from './SlaRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlaOrderResponse extends SdkResponse {
    public id?: string;
    private 'order_title'?: string;
    private 'order_id'?: string;
    private 'trigger_type'?: ShowSlaOrderResponseTriggerTypeEnum | string;
    private 'order_level'?: string;
    private 'create_time'?: string;
    private 'sla_record'?: Array<SlaRecord>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSlaOrderResponse {
        this['id'] = id;
        return this;
    }
    public withOrderTitle(orderTitle: string): ShowSlaOrderResponse {
        this['order_title'] = orderTitle;
        return this;
    }
    public set orderTitle(orderTitle: string  | undefined) {
        this['order_title'] = orderTitle;
    }
    public get orderTitle(): string | undefined {
        return this['order_title'];
    }
    public withOrderId(orderId: string): ShowSlaOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTriggerType(triggerType: ShowSlaOrderResponseTriggerTypeEnum | string): ShowSlaOrderResponse {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: ShowSlaOrderResponseTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): ShowSlaOrderResponseTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withOrderLevel(orderLevel: string): ShowSlaOrderResponse {
        this['order_level'] = orderLevel;
        return this;
    }
    public set orderLevel(orderLevel: string  | undefined) {
        this['order_level'] = orderLevel;
    }
    public get orderLevel(): string | undefined {
        return this['order_level'];
    }
    public withCreateTime(createTime: string): ShowSlaOrderResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withSlaRecord(slaRecord: Array<SlaRecord>): ShowSlaOrderResponse {
        this['sla_record'] = slaRecord;
        return this;
    }
    public set slaRecord(slaRecord: Array<SlaRecord>  | undefined) {
        this['sla_record'] = slaRecord;
    }
    public get slaRecord(): Array<SlaRecord> | undefined {
        return this['sla_record'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSlaOrderResponseTriggerTypeEnum {
    EVENT_TICKET = 'EVENT_TICKET',
    ALARM_TICKET = 'ALARM_TICKET',
    CHANGE_NOTE = 'CHANGE_NOTE',
    TO_DO_TASKS = 'TO_DO_TASKS',
    ISSUE_TICKET = 'ISSUE_TICKET'
}
