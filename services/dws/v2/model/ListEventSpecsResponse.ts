import { EventSpecResponse } from './EventSpecResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventSpecsResponse extends SdkResponse {
    public count?: number;
    private 'event_specs'?: Array<EventSpecResponse> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListEventSpecsResponse {
        this['count'] = count;
        return this;
    }
    public withEventSpecs(eventSpecs: Array<EventSpecResponse>): ListEventSpecsResponse {
        this['event_specs'] = eventSpecs;
        return this;
    }
    public set eventSpecs(eventSpecs: Array<EventSpecResponse> | undefined) {
        this['event_specs'] = eventSpecs;
    }
    public get eventSpecs() {
        return this['event_specs'];
    }
}