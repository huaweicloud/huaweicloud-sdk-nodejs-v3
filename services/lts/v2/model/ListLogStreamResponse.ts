import { LogStreamResBody } from './LogStreamResBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogStreamResponse extends SdkResponse {
    private 'log_streams'?: Array<LogStreamResBody>;
    public constructor() { 
        super();
    }
    public withLogStreams(logStreams: Array<LogStreamResBody>): ListLogStreamResponse {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<LogStreamResBody>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<LogStreamResBody> | undefined {
        return this['log_streams'];
    }
}