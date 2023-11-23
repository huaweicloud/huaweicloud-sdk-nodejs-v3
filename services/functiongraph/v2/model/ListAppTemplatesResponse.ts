import { ListAppTemplatesResult } from './ListAppTemplatesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppTemplatesResponse extends SdkResponse {
    public templates?: Array<ListAppTemplatesResult>;
    private 'next_marker'?: number;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<ListAppTemplatesResult>): ListAppTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
    public withNextMarker(nextMarker: number): ListAppTemplatesResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
    public withCount(count: number): ListAppTemplatesResponse {
        this['count'] = count;
        return this;
    }
}