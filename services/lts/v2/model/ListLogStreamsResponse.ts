import { ListLogStreamsResponseBody1LogStreams } from './ListLogStreamsResponseBody1LogStreams';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogStreamsResponse extends SdkResponse {
    private 'log_streams'?: Array<ListLogStreamsResponseBody1LogStreams>;
    public constructor() { 
        super();
    }
    public withLogStreams(logStreams: Array<ListLogStreamsResponseBody1LogStreams>): ListLogStreamsResponse {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<ListLogStreamsResponseBody1LogStreams>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<ListLogStreamsResponseBody1LogStreams> | undefined {
        return this['log_streams'];
    }
}