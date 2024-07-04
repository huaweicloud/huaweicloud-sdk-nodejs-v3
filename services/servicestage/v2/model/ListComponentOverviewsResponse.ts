import { ComponentOverview } from './ComponentOverview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentOverviewsResponse extends SdkResponse {
    public count?: number;
    public components?: Array<ComponentOverview>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListComponentOverviewsResponse {
        this['count'] = count;
        return this;
    }
    public withComponents(components: Array<ComponentOverview>): ListComponentOverviewsResponse {
        this['components'] = components;
        return this;
    }
}