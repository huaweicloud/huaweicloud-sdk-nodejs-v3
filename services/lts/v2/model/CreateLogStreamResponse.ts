
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogStreamResponse extends SdkResponse {
    private 'log_stream_id'?: string;
    public constructor() { 
        super();
    }
    public withLogStreamId(logStreamId: string): CreateLogStreamResponse {
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