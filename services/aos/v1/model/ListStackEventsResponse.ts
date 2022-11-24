import { StackEventResponse } from './StackEventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackEventsResponse extends SdkResponse {
    private 'stack_events'?: Array<StackEventResponse> | undefined;
    private 'next_marker'?: string | undefined;
    public constructor() { 
        super();
    }
    public withStackEvents(stackEvents: Array<StackEventResponse>): ListStackEventsResponse {
        this['stack_events'] = stackEvents;
        return this;
    }
    public set stackEvents(stackEvents: Array<StackEventResponse> | undefined) {
        this['stack_events'] = stackEvents;
    }
    public get stackEvents() {
        return this['stack_events'];
    }
    public withNextMarker(nextMarker: string): ListStackEventsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
}