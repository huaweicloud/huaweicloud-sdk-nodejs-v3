
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmnSubscriptionDetailResponse extends SdkResponse {
    private 'topic_name'?: string;
    private 'topic_urn'?: string;
    private 'delay_time'?: number;
    private 'rpo_delay'?: number;
    private 'rto_delay'?: number;
    private 'is_alarm_user'?: boolean;
    public constructor() { 
        super();
    }
    public withTopicName(topicName: string): ShowSmnSubscriptionDetailResponse {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withTopicUrn(topicUrn: string): ShowSmnSubscriptionDetailResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDelayTime(delayTime: number): ShowSmnSubscriptionDetailResponse {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withRpoDelay(rpoDelay: number): ShowSmnSubscriptionDetailResponse {
        this['rpo_delay'] = rpoDelay;
        return this;
    }
    public set rpoDelay(rpoDelay: number  | undefined) {
        this['rpo_delay'] = rpoDelay;
    }
    public get rpoDelay(): number | undefined {
        return this['rpo_delay'];
    }
    public withRtoDelay(rtoDelay: number): ShowSmnSubscriptionDetailResponse {
        this['rto_delay'] = rtoDelay;
        return this;
    }
    public set rtoDelay(rtoDelay: number  | undefined) {
        this['rto_delay'] = rtoDelay;
    }
    public get rtoDelay(): number | undefined {
        return this['rto_delay'];
    }
    public withIsAlarmUser(isAlarmUser: boolean): ShowSmnSubscriptionDetailResponse {
        this['is_alarm_user'] = isAlarmUser;
        return this;
    }
    public set isAlarmUser(isAlarmUser: boolean  | undefined) {
        this['is_alarm_user'] = isAlarmUser;
    }
    public get isAlarmUser(): boolean | undefined {
        return this['is_alarm_user'];
    }
}