
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserEventsLtsConfigurationsResponse extends SdkResponse {
    public enable?: boolean;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public constructor() { 
        super();
    }
    public withEnable(enable: boolean): ListUserEventsLtsConfigurationsResponse {
        this['enable'] = enable;
        return this;
    }
    public withLogGroupId(logGroupId: string): ListUserEventsLtsConfigurationsResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListUserEventsLtsConfigurationsResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
}