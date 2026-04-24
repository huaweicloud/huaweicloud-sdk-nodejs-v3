

export class SmnTopic {
    public name?: string;
    public urn?: string;
    private 'notify_method'?: SmnTopicNotifyMethodEnum | string;
    public protocol?: string;
    private 'other_persons'?: string;
    private 'max_send_times'?: number;
    private 'send_interval'?: number;
    private 'duty_schedule_id'?: number;
    private 'duty_schedule_name'?: string;
    private 'smn_config_id'?: string;
    private 'smn_config_name'?: string;
    public constructor() { 
    }
    public withName(name: string): SmnTopic {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): SmnTopic {
        this['urn'] = urn;
        return this;
    }
    public withNotifyMethod(notifyMethod: SmnTopicNotifyMethodEnum | string): SmnTopic {
        this['notify_method'] = notifyMethod;
        return this;
    }
    public set notifyMethod(notifyMethod: SmnTopicNotifyMethodEnum | string  | undefined) {
        this['notify_method'] = notifyMethod;
    }
    public get notifyMethod(): SmnTopicNotifyMethodEnum | string | undefined {
        return this['notify_method'];
    }
    public withProtocol(protocol: string): SmnTopic {
        this['protocol'] = protocol;
        return this;
    }
    public withOtherPersons(otherPersons: string): SmnTopic {
        this['other_persons'] = otherPersons;
        return this;
    }
    public set otherPersons(otherPersons: string  | undefined) {
        this['other_persons'] = otherPersons;
    }
    public get otherPersons(): string | undefined {
        return this['other_persons'];
    }
    public withMaxSendTimes(maxSendTimes: number): SmnTopic {
        this['max_send_times'] = maxSendTimes;
        return this;
    }
    public set maxSendTimes(maxSendTimes: number  | undefined) {
        this['max_send_times'] = maxSendTimes;
    }
    public get maxSendTimes(): number | undefined {
        return this['max_send_times'];
    }
    public withSendInterval(sendInterval: number): SmnTopic {
        this['send_interval'] = sendInterval;
        return this;
    }
    public set sendInterval(sendInterval: number  | undefined) {
        this['send_interval'] = sendInterval;
    }
    public get sendInterval(): number | undefined {
        return this['send_interval'];
    }
    public withDutyScheduleId(dutyScheduleId: number): SmnTopic {
        this['duty_schedule_id'] = dutyScheduleId;
        return this;
    }
    public set dutyScheduleId(dutyScheduleId: number  | undefined) {
        this['duty_schedule_id'] = dutyScheduleId;
    }
    public get dutyScheduleId(): number | undefined {
        return this['duty_schedule_id'];
    }
    public withDutyScheduleName(dutyScheduleName: string): SmnTopic {
        this['duty_schedule_name'] = dutyScheduleName;
        return this;
    }
    public set dutyScheduleName(dutyScheduleName: string  | undefined) {
        this['duty_schedule_name'] = dutyScheduleName;
    }
    public get dutyScheduleName(): string | undefined {
        return this['duty_schedule_name'];
    }
    public withSmnConfigId(smnConfigId: string): SmnTopic {
        this['smn_config_id'] = smnConfigId;
        return this;
    }
    public set smnConfigId(smnConfigId: string  | undefined) {
        this['smn_config_id'] = smnConfigId;
    }
    public get smnConfigId(): string | undefined {
        return this['smn_config_id'];
    }
    public withSmnConfigName(smnConfigName: string): SmnTopic {
        this['smn_config_name'] = smnConfigName;
        return this;
    }
    public set smnConfigName(smnConfigName: string  | undefined) {
        this['smn_config_name'] = smnConfigName;
    }
    public get smnConfigName(): string | undefined {
        return this['smn_config_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmnTopicNotifyMethodEnum {
    SUBJECT = 'SUBJECT',
    OWNER = 'OWNER',
    DUTY_SCHEDULE = 'DUTY_SCHEDULE',
    SUBJECT_OWNER = 'SUBJECT_OWNER',
    SUBJECT_DUTY = 'SUBJECT_DUTY',
    DINGDING = 'DINGDING'
}
