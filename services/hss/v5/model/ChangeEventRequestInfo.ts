import { OperateEventRequestInfo } from './OperateEventRequestInfo';


export class ChangeEventRequestInfo {
    private 'operate_type'?: string;
    public handler?: string;
    private 'operate_event_list'?: Array<OperateEventRequestInfo>;
    public constructor(operateType?: string, operateEventList?: Array<OperateEventRequestInfo>) { 
        this['operate_type'] = operateType;
        this['operate_event_list'] = operateEventList;
    }
    public withOperateType(operateType: string): ChangeEventRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withHandler(handler: string): ChangeEventRequestInfo {
        this['handler'] = handler;
        return this;
    }
    public withOperateEventList(operateEventList: Array<OperateEventRequestInfo>): ChangeEventRequestInfo {
        this['operate_event_list'] = operateEventList;
        return this;
    }
    public set operateEventList(operateEventList: Array<OperateEventRequestInfo>  | undefined) {
        this['operate_event_list'] = operateEventList;
    }
    public get operateEventList(): Array<OperateEventRequestInfo> | undefined {
        return this['operate_event_list'];
    }
}