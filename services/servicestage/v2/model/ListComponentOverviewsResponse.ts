import { ComponentView } from './ComponentView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentOverviewsResponse extends SdkResponse {
    public count?: number;
    public components?: Array<ComponentView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListComponentOverviewsResponse {
        this['count'] = count;
        return this;
    }
    public withComponents(components: Array<ComponentView>): ListComponentOverviewsResponse {
        this['components'] = components;
        return this;
    }
}