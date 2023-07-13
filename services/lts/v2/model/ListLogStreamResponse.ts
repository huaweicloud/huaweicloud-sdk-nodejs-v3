import { LogStream } from './LogStream';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogStreamResponse extends SdkResponse {
    private 'log_streams'?: Array<LogStream> | undefined;
    public constructor() { 
        super();
    }
    public withLogStreams(logStreams: Array<LogStream>): ListLogStreamResponse {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<LogStream> | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams() {
        return this['log_streams'];
    }
}