import { EventDetailRequestInfo } from './EventDetailRequestInfo';


export class OperateEventRequestInfo {
    private 'event_class_id'?: string;
    private 'event_id'?: string;
    private 'event_type'?: number;
    private 'occur_time'?: number;
    private 'operate_detail_list'?: Array<EventDetailRequestInfo>;
    public constructor(eventClassId?: string, eventId?: string, eventType?: number, occurTime?: number, operateDetailList?: Array<EventDetailRequestInfo>) { 
        this['event_class_id'] = eventClassId;
        this['event_id'] = eventId;
        this['event_type'] = eventType;
        this['occur_time'] = occurTime;
        this['operate_detail_list'] = operateDetailList;
    }
    public withEventClassId(eventClassId: string): OperateEventRequestInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventId(eventId: string): OperateEventRequestInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventType(eventType: number): OperateEventRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withOccurTime(occurTime: number): OperateEventRequestInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withOperateDetailList(operateDetailList: Array<EventDetailRequestInfo>): OperateEventRequestInfo {
        this['operate_detail_list'] = operateDetailList;
        return this;
    }
    public set operateDetailList(operateDetailList: Array<EventDetailRequestInfo>  | undefined) {
        this['operate_detail_list'] = operateDetailList;
    }
    public get operateDetailList(): Array<EventDetailRequestInfo> | undefined {
        return this['operate_detail_list'];
    }
}