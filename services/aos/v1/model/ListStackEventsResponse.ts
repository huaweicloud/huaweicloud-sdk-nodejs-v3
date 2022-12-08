import { StackEventResponse } from './StackEventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackEventsResponse extends SdkResponse {
    private 'stack_events'?: Array<StackEventResponse> | undefined;
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
}