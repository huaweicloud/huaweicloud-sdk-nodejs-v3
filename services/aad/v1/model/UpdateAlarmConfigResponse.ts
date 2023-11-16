
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmConfigResponse extends SdkResponse {
    private 'topic_urn'?: string;
    public constructor() { 
        super();
    }
    public withTopicUrn(topicUrn: string): UpdateAlarmConfigResponse {
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