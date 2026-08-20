
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceAutoCreateTopicResponse extends SdkResponse {
    private 'enable_auto_topic'?: boolean;
    public constructor() { 
        super();
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): UpdateInstanceAutoCreateTopicResponse {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean  | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic(): boolean | undefined {
        return this['enable_auto_topic'];
    }
}