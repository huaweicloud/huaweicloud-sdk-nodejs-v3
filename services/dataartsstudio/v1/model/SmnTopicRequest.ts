

export class SmnTopicRequest {
    public name?: string;
    public urn?: string;
    private 'notify_method'?: string;
    public protocol?: string;
    private 'other_persons'?: string;
    private 'max_send_times'?: number;
    private 'send_interval'?: number;
    private 'duty_schedule_name'?: string;
    private 'smn_config_name'?: string;
    public constructor(name?: string, urn?: string, notifyMethod?: string, maxSendTimes?: number, sendInterval?: number) { 
        this['name'] = name;
        this['urn'] = urn;
        this['notify_method'] = notifyMethod;
        this['max_send_times'] = maxSendTimes;
        this['send_interval'] = sendInterval;
    }
    public withName(name: string): SmnTopicRequest {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): SmnTopicRequest {
        this['urn'] = urn;
        return this;
    }
    public withNotifyMethod(notifyMethod: string): SmnTopicRequest {
        this['notify_method'] = notifyMethod;
        return this;
    }
    public set notifyMethod(notifyMethod: string  | undefined) {
        this['notify_method'] = notifyMethod;
    }
    public get notifyMethod(): string | undefined {
        return this['notify_method'];
    }
    public withProtocol(protocol: string): SmnTopicRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withOtherPersons(otherPersons: string): SmnTopicRequest {
        this['other_persons'] = otherPersons;
        return this;
    }
    public set otherPersons(otherPersons: string  | undefined) {
        this['other_persons'] = otherPersons;
    }
    public get otherPersons(): string | undefined {
        return this['other_persons'];
    }
    public withMaxSendTimes(maxSendTimes: number): SmnTopicRequest {
        this['max_send_times'] = maxSendTimes;
        return this;
    }
    public set maxSendTimes(maxSendTimes: number  | undefined) {
        this['max_send_times'] = maxSendTimes;
    }
    public get maxSendTimes(): number | undefined {
        return this['max_send_times'];
    }
    public withSendInterval(sendInterval: number): SmnTopicRequest {
        this['send_interval'] = sendInterval;
        return this;
    }
    public set sendInterval(sendInterval: number  | undefined) {
        this['send_interval'] = sendInterval;
    }
    public get sendInterval(): number | undefined {
        return this['send_interval'];
    }
    public withDutyScheduleName(dutyScheduleName: string): SmnTopicRequest {
        this['duty_schedule_name'] = dutyScheduleName;
        return this;
    }
    public set dutyScheduleName(dutyScheduleName: string  | undefined) {
        this['duty_schedule_name'] = dutyScheduleName;
    }
    public get dutyScheduleName(): string | undefined {
        return this['duty_schedule_name'];
    }
    public withSmnConfigName(smnConfigName: string): SmnTopicRequest {
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