import { StackEvent } from './StackEvent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackEventsResponse extends SdkResponse {
    private 'stack_events'?: Array<StackEvent>;
    public constructor() { 
        super();
    }
    public withStackEvents(stackEvents: Array<StackEvent>): ListStackEventsResponse {
        this['stack_events'] = stackEvents;
        return this;
    }
    public set stackEvents(stackEvents: Array<StackEvent>  | undefined) {
        this['stack_events'] = stackEvents;
    }
    public get stackEvents(): Array<StackEvent> | undefined {
        return this['stack_events'];
    }
}