import { EventTypeResponseInfo } from './EventTypeResponseInfo';


export class EventTypeDetailResponseInfo {
    private 'event_type_name'?: EventTypeDetailResponseInfoEventTypeNameEnum | string;
    private 'event_type_num'?: number;
    private 'event_type_list'?: Array<EventTypeResponseInfo>;
    public constructor() { 
    }
    public withEventTypeName(eventTypeName: EventTypeDetailResponseInfoEventTypeNameEnum | string): EventTypeDetailResponseInfo {
        this['event_type_name'] = eventTypeName;
        return this;
    }
    public set eventTypeName(eventTypeName: EventTypeDetailResponseInfoEventTypeNameEnum | string  | undefined) {
        this['event_type_name'] = eventTypeName;
    }
    public get eventTypeName(): EventTypeDetailResponseInfoEventTypeNameEnum | string | undefined {
        return this['event_type_name'];
    }
    public withEventTypeNum(eventTypeNum: number): EventTypeDetailResponseInfo {
        this['event_type_num'] = eventTypeNum;
        return this;
    }
    public set eventTypeNum(eventTypeNum: number  | undefined) {
        this['event_type_num'] = eventTypeNum;
    }
    public get eventTypeNum(): number | undefined {
        return this['event_type_num'];
    }
    public withEventTypeList(eventTypeList: Array<EventTypeResponseInfo>): EventTypeDetailResponseInfo {
        this['event_type_list'] = eventTypeList;
        return this;
    }
    public set eventTypeList(eventTypeList: Array<EventTypeResponseInfo>  | undefined) {
        this['event_type_list'] = eventTypeList;
    }
    public get eventTypeList(): Array<EventTypeResponseInfo> | undefined {
        return this['event_type_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventTypeDetailResponseInfoEventTypeNameEnum {
    MALICIOUS_SOFTWARE = 'malicious_software',
    EXPLOIT_ATTACK = 'exploit_attack',
    SYSTEM_ABNORMAL_BEHAVIOR = 'system_abnormal_behavior',
    USER_ABNORMAL_BEHAVIOR = 'user_abnormal_behavior',
    NETWORK_ABNORMAL_ACCESS = 'network_abnormal_access',
    RESOURCE_RECON = 'resource_recon',
    RISK_AUDIT = 'risk_audit',
    INFORMATION_DESTROY = 'information_destroy',
    DENIAL_OF_SERVICE = 'denial_of_service',
    ADVANCED_THREAT = 'advanced_threat',
    EXTEND = 'extend'
}
