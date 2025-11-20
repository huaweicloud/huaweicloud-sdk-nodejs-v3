
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmConfigResponse extends SdkResponse {
    public blackhole?: string;
    public ddos?: string;
    private 'topic_name'?: string;
    private 'topic_urn'?: string;
    public constructor() { 
        super();
    }
    public withBlackhole(blackhole: string): ShowAlarmConfigResponse {
        this['blackhole'] = blackhole;
        return this;
    }
    public withDdos(ddos: string): ShowAlarmConfigResponse {
        this['ddos'] = ddos;
        return this;
    }
    public withTopicName(topicName: string): ShowAlarmConfigResponse {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withTopicUrn(topicUrn: string): ShowAlarmConfigResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
}