
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAlarmTopicConfigInfoResponse extends SdkResponse {
    private 'is_use_topic'?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withIsUseTopic(isUseTopic: boolean): SetAlarmTopicConfigInfoResponse {
        this['is_use_topic'] = isUseTopic;
        return this;
    }
    public set isUseTopic(isUseTopic: boolean  | undefined) {
        this['is_use_topic'] = isUseTopic;
    }
    public get isUseTopic(): boolean | undefined {
        return this['is_use_topic'];
    }
    public withStatus(status: string): SetAlarmTopicConfigInfoResponse {
        this['status'] = status;
        return this;
    }
}